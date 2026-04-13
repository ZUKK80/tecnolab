import { Link } from "@tanstack/react-router";
import { Zap } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useAuth } from "@/hooks/use-google-auth";
import { useState } from "react";

type AuthMode = 'login' | 'register' | 'forgot' | 'verify' | 'reset';

export function Header() {
  const { user, signIn, signOut, signUp, sendRecoveryCode, verifyRecoveryCode, resetPassword, isLoading, error } = useAuth();
  const [authMode, setAuthMode] = useState<AuthMode>('login');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignOut = () => {
    signOut();
    setAuthMode('login');
    setEmail('');
    setPassword('');
    setName('');
    setCode('');
    setNewPassword('');
    setConfirmPassword('');
  };
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/15 text-primary group-hover:bg-primary/25 transition-colors">
            <Zap className="h-4 w-4" />
          </div>
          <span className="font-display text-lg font-bold tracking-wider text-foreground">
            ELECTRO<span className="text-primary">LAB</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <Link to="/" className="text-muted-foreground hover:text-primary transition-colors" activeProps={{ className: "text-primary" }}>
            Inicio
          </Link>
          <span className="text-muted-foreground/50 cursor-default">Mis Cursos</span>
          <span className="text-muted-foreground/50 cursor-default">Notas</span>
          <span className="text-muted-foreground/50 cursor-default">Progreso</span>
        </nav>

        <div className="flex items-center gap-2">
          {user ? (
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-primary/15 flex items-center justify-center text-primary font-medium">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <span className="text-sm font-medium">{user.name}</span>
              </div>
              <button
                onClick={handleSignOut}
                className="rounded-md border border-border bg-secondary px-3 py-1.5 text-xs font-medium text-muted-foreground hover:bg-secondary/80 transition-colors cursor-pointer"
              >
                Cerrar Sesión
              </button>
            </div>
          ) : (
            <Dialog>
              <DialogTrigger asChild>
                <button className="rounded-md border border-border bg-secondary px-3 py-1.5 text-xs font-medium text-muted-foreground hover:bg-secondary/80 transition-colors cursor-pointer">
                  Iniciar Sesión
                </button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    {authMode === 'login' && 'Iniciar Sesión'}
                    {authMode === 'register' && 'Registrarse'}
                    {authMode === 'forgot' && 'Recuperar Contraseña'}
                    {authMode === 'verify' && 'Verificar Código'}
                    {authMode === 'reset' && 'Nueva Contraseña'}
                  </DialogTitle>
                </DialogHeader>
                <div className="flex flex-col gap-4 mt-4">
                  {/* Login Form */}
                  {authMode === 'login' && (
                    <>
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium">Email</label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="tu@email.com"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium">Contraseña</label>
                        <input
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="••••••••"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                      </div>
                      <button
                        onClick={() => signIn(email, password)}
                        disabled={isLoading}
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-md text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
                      </button>
                      <button
                        onClick={() => setAuthMode('forgot')}
                        className="text-sm text-primary hover:underline"
                      >
                        ¿Olvidaste tu contraseña?
                      </button>
                    </>
                  )}

                  {/* Register Form */}
                  {authMode === 'register' && (
                    <>
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium">Nombre</label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Tu nombre"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium">Email</label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="tu@email.com"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium">Contraseña</label>
                        <input
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="••••••••"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                      </div>
                      <button
                        onClick={() => signUp(email, password, name)}
                        disabled={isLoading}
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-md text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isLoading ? 'Registrando...' : 'Registrarse'}
                      </button>
                    </>
                  )}

                  {/* Forgot Password Form */}
                  {authMode === 'forgot' && (
                    <>
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium">Email</label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="tu@email.com"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                      </div>
                      <button
                        onClick={async () => {
                          const success = await sendRecoveryCode(email);
                          if (success) {
                            setAuthMode('verify');
                          }
                        }}
                        disabled={isLoading}
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-md text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isLoading ? 'Enviando...' : 'Enviar Código'}
                      </button>
                    </>
                  )}

                  {/* Verify Code Form */}
                  {authMode === 'verify' && (
                    <>
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium">Código de recuperación</label>
                        <input
                          type="text"
                          value={code}
                          onChange={(e) => setCode(e.target.value)}
                          placeholder="123456"
                          maxLength={6}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                      </div>
                      <button
                        onClick={async () => {
                          const success = await verifyRecoveryCode(code);
                          if (success) {
                            setAuthMode('reset');
                          }
                        }}
                        disabled={isLoading}
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-md text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isLoading ? 'Verificando...' : 'Verificar Código'}
                      </button>
                    </>
                  )}

                  {/* Reset Password Form */}
                  {authMode === 'reset' && (
                    <>
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium">Nueva Contraseña</label>
                        <input
                          type="password"
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          placeholder="••••••••"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium">Confirmar Contraseña</label>
                        <input
                          type="password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          placeholder="••••••••"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                      </div>
                      <button
                        onClick={async () => {
                          if (newPassword !== confirmPassword) {
                            setError('Las contraseñas no coinciden');
                            return;
                          }
                          if (newPassword.length < 6) {
                            setError('La contraseña debe tener al menos 6 caracteres');
                            return;
                          }
                          const success = await resetPassword(newPassword);
                          if (success) {
                            setAuthMode('login');
                            setNewPassword('');
                            setConfirmPassword('');
                            setCode('');
                          }
                        }}
                        disabled={isLoading}
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-md text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isLoading ? 'Cambiando...' : 'Cambiar Contraseña'}
                      </button>
                    </>
                  )}

                  {/* Toggle between login and register */}
                  {(authMode === 'login' || authMode === 'register') && (
                    <button
                      onClick={() => {
                        setAuthMode(authMode === 'login' ? 'register' : 'login');
                        setEmail('');
                        setPassword('');
                        setName('');
                      }}
                      className="text-sm text-primary hover:underline"
                    >
                      {authMode === 'login' ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia Sesión'}
                    </button>
                  )}

                  {/* Back to login button */}
                  {(authMode === 'forgot' || authMode === 'verify' || authMode === 'reset') && (
                    <button
                      onClick={() => {
                        setAuthMode('login');
                        setEmail('');
                        setCode('');
                        setNewPassword('');
                        setConfirmPassword('');
                      }}
                      className="text-sm text-muted-foreground hover:underline"
                    >
                      Volver al inicio de sesión
                    </button>
                  )}

                  {error && (
                    <div className="text-sm text-destructive">
                      {error}
                    </div>
                  )}
                </div>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </div>
    </header>
  );
}
