import { useEffect, useRef } from "react";

interface PCBBackgroundProps {
  density?: number;
  className?: string;
}

export function PCBBackground({ density = 12, className = "" }: PCBBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const particles: { x: number; y: number; speed: number; pathIndex: number; progress: number }[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    const w = () => canvas.offsetWidth;
    const h = () => canvas.offsetHeight;

    const paths: { x: number; y: number }[][] = [];
    const spacing = Math.max(w(), h()) / density;

    // Generate PCB traces
    for (let i = 0; i < density * 2; i++) {
      const path: { x: number; y: number }[] = [];
      let x = Math.random() * w();
      let y = 0;
      path.push({ x, y });

      while (y < h()) {
        const dir = Math.random();
        if (dir < 0.4) {
          y += spacing * (0.5 + Math.random());
        } else if (dir < 0.7) {
          x += spacing * (0.5 + Math.random()) * (Math.random() > 0.5 ? 1 : -1);
          x = Math.max(10, Math.min(w() - 10, x));
        } else {
          y += spacing * 0.5;
          x += spacing * 0.5 * (Math.random() > 0.5 ? 1 : -1);
          x = Math.max(10, Math.min(w() - 10, x));
        }
        path.push({ x, y });
      }
      if (path.length > 2) paths.push(path);
    }

    // Particles
    for (let i = 0; i < Math.min(paths.length, 15); i++) {
      particles.push({
        x: 0, y: 0,
        speed: 0.002 + Math.random() * 0.004,
        pathIndex: i % paths.length,
        progress: Math.random(),
      });
    }

    function getPointOnPath(path: { x: number; y: number }[], t: number) {
      const totalSegments = path.length - 1;
      const segment = Math.min(Math.floor(t * totalSegments), totalSegments - 1);
      const localT = (t * totalSegments) - segment;
      const p0 = path[segment];
      const p1 = path[segment + 1];
      return {
        x: p0.x + (p1.x - p0.x) * localT,
        y: p0.y + (p1.y - p0.y) * localT,
      };
    }

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, w(), h());

      // Draw traces
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = "rgba(34, 197, 94, 0.08)";
      for (const path of paths) {
        ctx.beginPath();
        ctx.moveTo(path[0].x, path[0].y);
        for (let i = 1; i < path.length; i++) {
          ctx.lineTo(path[i].x, path[i].y);
        }
        ctx.stroke();
      }

      // Draw nodes
      ctx.fillStyle = "rgba(34, 197, 94, 0.12)";
      for (const path of paths) {
        for (const point of path) {
          ctx.beginPath();
          ctx.arc(point.x, point.y, 2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Animate particles
      for (const particle of particles) {
        particle.progress += particle.speed;
        if (particle.progress >= 1) {
          particle.progress = 0;
          particle.pathIndex = Math.floor(Math.random() * paths.length);
        }

        const path = paths[particle.pathIndex];
        if (!path || path.length < 2) continue;

        const pos = getPointOnPath(path, particle.progress);

        const gradient = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, 16);
        gradient.addColorStop(0, "rgba(34, 197, 94, 0.6)");
        gradient.addColorStop(0.5, "rgba(34, 197, 94, 0.15)");
        gradient.addColorStop(1, "rgba(34, 197, 94, 0)");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, 16, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "rgba(74, 222, 128, 0.9)";
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, 2.5, 0, Math.PI * 2);
        ctx.fill();
      }

      animationId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    />
  );
}
