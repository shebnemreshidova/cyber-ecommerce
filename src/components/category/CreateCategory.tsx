import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Modal from "../common/Modal";
import Input from "../common/Input";
import UploadInput from "../common/FileInput";
import Button from "../common/Button";
import { useAddCategoryMutation } from "../../redux/services/adminApi";

const categorySchema = z.object({
    categoryName: z.string().min(1, "Category name is required"),
    image: z
        .any()
        .refine((files) => files?.length === 1, "Image is required"),
});

type CreateProductProps = {
    isModalOpen: boolean,
    setIsModalOpen: (isModalOpen: string) => void

}

type CategoryFormData = z.infer<typeof categorySchema>
const CreateCategory = ({ isModalOpen, setIsModalOpen }: CreateProductProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<CategoryFormData>({
        resolver: zodResolver(categorySchema) as any,
    });

    const [addCategory, { isLoading }] = useAddCategoryMutation();

    const onSubmit = async (data: CategoryFormData) => {
        try {
            const formData = new FormData();

            formData.append("categoryName", data.categoryName);

            if (data.image && data.image.length > 0) {
                formData.append("image", data.image[0]);
            }

            await addCategory(formData).unwrap();
            reset();
            !isLoading && setIsModalOpen('');
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <Modal
            title="Add New Product"
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen('')}
        >
            <form
                className="flex flex-col gap-4"
                onSubmit={handleSubmit(onSubmit)}
            >
                <Input
                    label="Product Name"
                    placeholder="Product Name"
                    {...register("categoryName")}
                    error={errors.categoryName?.message}
                />
             
                <UploadInput
                    label="Product Image"
                    {...register("image")}
                    error={errors.image?.message as string}
                />

                <Button
                    type="submit" variant="primary">
                    {isLoading ? "Saving..." : "  Save Category"}
                </Button>
            </form>
        </Modal>
    )
}

export default CreateCategory