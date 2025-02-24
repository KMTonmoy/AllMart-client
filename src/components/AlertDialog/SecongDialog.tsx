import { useState } from "react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function ProductFormDialog() {
    const [product, setProduct] = useState({
        name: "",
        category: "",
        price: "",
        description: "",
        stock: "",
        colors: [],
        images: ["", "", "", ""],
        gender: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: string, index?: number) => {
        if (index !== undefined) {
            // Handle array fields (images)
            setProduct((prev) => {
                const newArray = [...prev[field as keyof typeof product]];
                newArray[index] = e.target.value;
                return { ...prev, [field]: newArray };
            });
        } else {
            setProduct({ ...product, [field]: e.target.value });
        }
    };

    const handleColorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedColors = Array.from(e.target.selectedOptions, option => option.value);
        setProduct(prev => ({ ...prev, colors: selectedColors }));
    };

    const handleSubmit = () => {
        console.log("Submitted Product:", product);
        alert("Product submitted successfully! ✅");
    };

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="outline">Add Product</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Add New Product</AlertDialogTitle>
                    <AlertDialogDescription>
                        Fill in the details below to add a new product to the catalog.
                    </AlertDialogDescription>
                </AlertDialogHeader>

                <div className="grid gap-4">
                    {/* Name */}
                    <div>
                        <Label htmlFor="name">Product Name</Label>
                        <Input id="name" type="text" placeholder="Enter product name" value={product.name}
                            onChange={(e) => handleInputChange(e, "name")} />
                    </div>

                    {/* Category */}
                    <div>
                        <Label htmlFor="category">Category</Label>
                        <Input id="category" type="text" placeholder="Enter category" value={product.category}
                            onChange={(e) => handleInputChange(e, "category")} />
                    </div>

                    {/* Price */}
                    <div>
                        <Label htmlFor="price">Price ($)</Label>
                        <Input id="price" type="number" placeholder="Enter price" value={product.price}
                            onChange={(e) => handleInputChange(e, "price")} />
                    </div>

                    {/* Description */}
                    <div>
                        <Label htmlFor="description">Description</Label>
                        <Input id="description" type="text" placeholder="Enter description" value={product.description}
                            onChange={(e) => handleInputChange(e, "description")} />
                    </div>

                    {/* Stock */}
                    <div>
                        <Label htmlFor="stock">Stock</Label>
                        <Input id="stock" type="number" placeholder="Enter stock quantity" value={product.stock}
                            onChange={(e) => handleInputChange(e, "stock")} />
                    </div>

                    {/* Gender Selection */}
                    <div>
                        <Label>Gender</Label>
                        <div>
                            <label>
                                <input type="radio" name="gender" value="Men" checked={product.gender === "Men"}
                                    onChange={(e) => handleInputChange(e, "gender")} />
                                Men
                            </label>
                            <label>
                                <input type="radio" name="gender" value="Women" checked={product.gender === "Women"}
                                    onChange={(e) => handleInputChange(e, "gender")} />
                                Women
                            </label>
                            <label>
                                <input type="radio" name="gender" value="Baby" checked={product.gender === "Baby"}
                                    onChange={(e) => handleInputChange(e, "gender")} />
                                Baby
                            </label>
                            <label>
                                <input type="radio" name="gender" value="Anyone" checked={product.gender === "Anyone"}
                                    onChange={(e) => handleInputChange(e, "gender")} />
                                Anyone
                            </label>
                        </div>
                    </div>

                    {/* Colors (Dropdown, multi-select) */}
                    <div>
                        <Label htmlFor="colors">Colors</Label>
                        <select id="colors" multiple value={product.colors} onChange={handleColorChange} className="w-full">
                            <option value="#FF0000">Red</option>
                            <option value="#00FF00">Green</option>
                            <option value="#0000FF">Blue</option>
                            <option value="#FFFF00">Yellow</option>
                            <option value="#000000">Black</option>
                            <option value="#FFFFFF">White</option>
                        </select>
                    </div>

                    {/* Images */}
                    <div className="grid grid-cols-2 gap-2">
                        {product.images.map((image, index) => (
                            <div key={index}>
                                <Label htmlFor={`image-${index}`}>Image {index + 1}</Label>
                                <Input id={`image-${index}`} type="file" accept="image/*" onChange={(e) => {
                                    const file = e.target.files ? e.target.files[0] : null;
                                    if (file) {
                                        const reader = new FileReader();
                                        reader.onloadend = () => {
                                            handleInputChange({ target: { value: reader.result as string } } as any, "images", index);
                                        };
                                        reader.readAsDataURL(file);
                                    }
                                }} />
                                {image && <img src={image} alt={`Preview ${index + 1}`} className="w-16 h-16 rounded mt-2" />}
                            </div>
                        ))}
                    </div>
                </div>

                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleSubmit}>Submit</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
