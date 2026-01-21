import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../components/common/Input";
import { z } from "zod";
import { useRegisterUserMutation } from "../../redux/services/authApi";
import { useNavigate } from "react-router-dom";

const registerSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string().min(6, "Confirm password must be at least 6 characters"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

type RegisterFormData = z.infer<typeof registerSchema>;

const Register = () => {
  const { register, handleSubmit, formState: { errors }, setError } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });
  const [registerUser, { isLoading }] = useRegisterUserMutation();

  const navigate = useNavigate();

  const onSubmit = async (data: RegisterFormData) => {
    try {
      await registerUser({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
      }).unwrap();
      navigate("/login");

    } catch (err: string | any) {
      if (err?.status === 409) {
        setError("email", { type: "manual", message: err.data.message });
      } else {
        setError("email", { type: "manual", message: "Something went wrong" });
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-80">
        <h1 className="text-2xl font-bold text-center">Register</h1>

        <Input
          label="First Name"
          type="text"
          {...register("firstName")}
          error={errors.firstName?.message}
        />
        <Input
          label="Last Name"
          type="text"
          {...register("lastName")}
          error={errors.lastName?.message}
        />
        <Input
          label="Email"
          type="email"
          {...register("email")}
          error={errors.email?.message}
        />
        <Input
          label="Password"
          type="password"
          {...register("password")}
          error={errors.password?.message}
        />
        <Input
          label="Confirm Password"
          type="password"
          {...register("confirmPassword")}
          error={errors.confirmPassword?.message}
        />

        <button type="submit" disabled={isLoading} className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
          {isLoading ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
};

export default Register;
