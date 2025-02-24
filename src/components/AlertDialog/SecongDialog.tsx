"use client";
import { useState, useEffect } from "react";
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
import { X } from "lucide-react";
import { Select, SelectItem } from "@/components/ui/select";

export function ProductFormDialog() {
    const [categories, setCategories] = useState<string[]>([]);
    const [product, setProduct] = useState({
        name: "",
        category: "",
        price: "",
        stock: "",
        description: "",
        tags: [] as string[],
        colors: [] as string[],
        images: [],
        gender: "",
    });

    useEffect(() => {
        fetch("http://localhost:8000/catagorys")
            .then((res) => res.json())
            .then((data) => setCategories(data));
    }, []);

    const handleInputChange = (e, field) => {
        setProduct({ ...product, [field]: e.target.value });
    };

    const handleTagInput = (e, field) => {
        if (e.key === " " && e.target.value.trim()) {
            const value = e.target.value.trim();
            if (!product[field].includes(value)) {
                setProduct(prev => ({ ...prev, [field]: [...prev[field], value] }));
            }
            e.target.value = "";
        }
    };

    const removeItem = (field, itemToRemove) => {
        setProduct(prev => ({ ...prev, [field]: prev[field].filter(item => item !== itemToRemove) }));
    };

    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);
        if (files.length + product.images.length > 4) return;
        const imageUrls = files.map(file => URL.createObjectURL(file));
        setProduct(prev => ({ ...prev, images: [...prev.images, ...imageUrls] }));
    };

    const removeImage = (index) => {
        setProduct(prev => ({
            ...prev,
            images: prev.images.filter((_, i) => i !== index),
        }));
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
                    <AlertDialogDescription>Fill in the details below to add a new product to the catalog.</AlertDialogDescription>
                </AlertDialogHeader>

                <div className="grid gap-4">
                    <Label>Product Name</Label>
                    <Input value={product.name} onChange={(e) => handleInputChange(e, "name")} />

                    <Label>Category</Label>
                    <Select onValueChange={(value) => setProduct({ ...product, category: value })}>
                        {categories.map((category, index) => (
                            <SelectItem key={index} value={category}>{category}</SelectItem>
                        ))}
                    </Select>

                    <Label>Price ($)</Label>
                    <Input type="number" value={product.price} onChange={(e) => handleInputChange(e, "price")} />

                    <Label>Stock</Label>
                    <Input type="number" value={product.stock} onChange={(e) => handleInputChange(e, "stock")} />

                    <Label>Gender</Label>
                    <div className="flex gap-4">
                        {["Men", "Women", "Baby", "Anyone"].map((gender) => (
                            <label key={gender} className="flex items-center gap-2">
                                <input type="radio" name="gender" value={gender} checked={product.gender === gender}
                                    onChange={(e) => handleInputChange(e, "gender")} />
                                {gender}
                            </label>
                        ))}
                    </div>

                    <Label>Tags</Label>
                    <Input placeholder="Type a tag and press space" onKeyDown={(e) => handleTagInput(e, "tags")} />
                    <div className="flex flex-wrap gap-2 mt-2">
                        {product.tags.map((tag, index) => (
                            <div key={index} className="flex items-center bg-blue-500 text-white px-3 py-1 rounded-full">
                                <span>{tag}</span>
                                <button onClick={() => removeItem("tags", tag)} className="ml-2 text-sm hover:text-red-500">
                                    <X size={14} />
                                </button>
                            </div>
                        ))}
                    </div>

                    <Label>Colors</Label>
                    <Input placeholder="Type a color and press space" onKeyDown={(e) => handleTagInput(e, "colors")} />
                    <div className="flex flex-wrap gap-2 mt-2">
                        {product.colors.map((color, index) => (
                            <div key={index} className="flex items-center bg-gray-300 px-3 py-1 rounded-full">
                                <span>{color}</span>
                                <button onClick={() => removeItem("colors", color)} className="ml-2 text-sm hover:text-red-500">
                                    <X size={14} />
                                </button>
                            </div>
                        ))}
                    </div>

                    <Label>Images</Label>
                    <Input type="file" accept="image/*" multiple onChange={handleImageUpload} />
                    <div className="flex flex-wrap gap-2 mt-2">
                        {product.images.map((image, index) => (
                            <div key={index} className="relative w-20 h-20">
                                <img src={image} alt={`Preview ${index + 1}`} className="w-full h-full rounded" />
                                <button onClick={() => removeImage(index)} className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1">
                                    <X size={14} />
                                </button>
                            </div>
                        ))}
                    </div>

                    <Label>Description</Label>
                    <textarea className="border-2 min-h-[100px]" value={product.description} onChange={(e) => handleInputChange(e, "description")} />
                </div>

                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleSubmit}>Submit</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
