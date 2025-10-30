"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Mail, Lock, User } from "lucide-react"

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6 min-h-screen items-center justify-center bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 p-4", className)} {...props}>
      <Card className="w-full max-w-md shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
        <CardHeader className="space-y-3 pb-6">
          <CardTitle className="text-3xl font-bold text-center bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Create your account
          </CardTitle>
          <CardDescription className="text-center text-base">
            Fill in your details below to register
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <FieldGroup className="space-y-5">
              <Field>
                <FieldLabel htmlFor="name" className="text-sm font-medium">
                  Full name
                </FieldLabel>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    required
                    className="pl-10 h-11 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>
              </Field>
              <Field>
                <FieldLabel htmlFor="email" className="text-sm font-medium">
                  Email
                </FieldLabel>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    className="pl-10 h-11 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>
              </Field>
              <Field>
                <FieldLabel htmlFor="password" className="text-sm font-medium">
                  Password
                </FieldLabel>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    id="password"
                    type="password"
                    required
                    className="pl-10 h-11 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>
              </Field>

              {/* Botão de registro com redirecionamento automático */}
              <Field className="space-y-3 pt-2">
                <Button 
                  type="submit" 
                  className="w-full h-11 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-200"
                  onClick={(e) => {
                    e.preventDefault()
                    window.location.href = "/login"
                  }}
                >
                  Register
                </Button>
                <p className="text-center text-sm pt-2">
                  Already have an account?{" "}
                  <a href="/login" className="font-medium text-blue-600 hover:text-blue-700 hover:underline underline-offset-4 transition-colors">
                    Login
                  </a>
                </p>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
