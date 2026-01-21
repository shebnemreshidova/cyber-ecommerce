import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useAddProductMutation } from "../../redux/services/adminApi";
import Modal from "../common/Modal";
import Input from "../common/Input";
import UploadInput from "../common/FileInput";
import Button from "../common/Button";

const productSchema = z.object({
    name: z.string().min(1, "Product name is required"),
    price: z.coerce.number().min(1, "Price must be at least 1"),
    description: z.string().min(1, "Product description is required"),
    order: z.coerce.number().min(1, "Order must be at least 1"),
    image: z
        .any()
        .refine((files) => files?.length === 1, "Image is required"),
});

type CreateProductProps = {
    isModalOpen: boolean,
    setIsModalOpen: (isModalOpen: boolean) => void

}

type ProductFormData = z.infer<typeof productSchema>
const CreateProduct = ({ isModalOpen, setIsModalOpen }: CreateProductProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ProductFormData>({
        resolver: zodResolver(productSchema) as any,
    });

    const [addProduct, { isLoading }] = useAddProductMutation();
    const onSubmit = async (data: ProductFormData) => {
        try {
            const formData = new FormData();

            formData.append("name", data.name);
            formData.append("price", data.price.toString());
            formData.append("order", data.order.toString());
            formData.append("description", data.description);

            if (data.image && data.image.length > 0) {
                formData.append("image", data.image[0]);
            }

            await addProduct(formData).unwrap();
            reset();
            !isLoading && setIsModalOpen(false);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <Modal
            title="Add New Product"
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
        >
            <form
                className="flex flex-col gap-4"
                onSubmit={handleSubmit(onSubmit)}
            >
                <Input
                    label="Product Name"
                    placeholder="Product Name"
                    {...register("name")}
                    error={errors.name?.message}
                />
                <Input
                    label="Product Price"
                    placeholder="Price"
                    type="number"
                    {...register("price")}
                    error={errors.price?.message}
                />
                <Input
                    label="Product Order"
                    placeholder="Order"
                    type="number"
                    {...register("order")}
                    error={errors.order?.message}
                />
                <Input
                    label="Product Description"
                    placeholder="Description"
                    {...register("description")}
                    error={errors.description?.message}
                />
                <UploadInput
                    label="Product Image"
                    {...register("image")}
                    error={errors.image?.message as string}
                />

                <Button
                    type="submit" variant="primary">
                    {isLoading ? "Saving..." : "  Save Product"}
                </Button>
            </form>
        </Modal>
    )
}

export default CreateProduct