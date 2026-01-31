import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../components/common/Input";
import { z } from "zod";
import { useLoginUserMutation } from "../../redux/services/authApi";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useAuthContext } from "../../context/authContext";
import { useSyncWishlistMutation } from "../../redux/services/productApi";
const loginSchema = z.object({
  email: z.email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

const Login = () => {
  const { register, handleSubmit, formState: { errors }, setError } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });
  const [loginUser, { isLoading }] = useLoginUserMutation();

  const navigate = useNavigate();
  const { login } = useAuthContext();
  const [syncWishlist] = useSyncWishlistMutation();
  const onSubmit = async (data: LoginFormData) => {
    try {
      const res = await loginUser({
        email: data.email,
        password: data.password,
      }).unwrap();

      const token = res.user.token;
      Cookies.set("token", token, {
        expires: 1,
        secure: true,
      });
      Cookies.set("userId", res.user.id, {
        expires: 1,
        secure: true,
      });
      login(res.user.id);
      const localWishlistStr = localStorage.getItem("LocalWishlist");
      if (localWishlistStr) {
        const localWishlist = JSON.parse(localWishlistStr); 
        if (Array.isArray(localWishlist) && localWishlist.length > 0) {
          const productIds = localWishlist.map(item => ({ productId: item._id }));
          await syncWishlist(productIds);
          localStorage.setItem("LocalWishlist", '[]');
        }
      }

      navigate("/");

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
        <h1 className="text-2xl font-bold text-center">Login</h1>
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
        <button type="submit" disabled={isLoading} className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
