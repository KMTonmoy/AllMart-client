import { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Trash, Pencil, ChevronLeft, ChevronRight } from "lucide-react";

// Define the product type
interface Product {
  _id: string;
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  description: string;
  tags: string[];
  colors: string[];
  images: string[];
  gender: string;
}

interface TableDemoProps {
  products: Product[];
}

const ITEMS_PER_PAGE = 15;

export function TableDemo({ products }: TableDemoProps) {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const selectedProducts = products.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="w-full p-4">
      <Table className="w-full border border-gray-200 shadow-md rounded-lg">
        <TableCaption className="text-lg font-semibold">
          A list of available products.
        </TableCaption>
        <TableHeader>
          <TableRow className="bg-gray-100">
            <TableHead className="w-[100px]">Image</TableHead>
            <TableHead className="w-[120px]">Product ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Stock</TableHead>
            <TableHead>Added Date</TableHead>
            <TableHead className="w-[120px] text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {selectedProducts.map((product) => (
            <TableRow key={product._id} className="hover:bg-gray-50">
              <TableCell>
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-16 h-16 object-cover rounded-md border"
                />
              </TableCell>
              <TableCell className="font-medium">{product._id}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell className="font-semibold">${product.price}</TableCell>
              <TableCell>{product.stock}</TableCell>
              <TableCell className="text-gray-500">2025-02-24</TableCell>
              <TableCell className="flex gap-2 justify-center">
                <Button variant="outline" size="icon">
                  <Pencil className="w-4 h-4 text-blue-600" />
                </Button>
                <Button variant="outline" size="icon">
                  <Trash className="w-4 h-4 text-red-600" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow className="flex justify-between">
            <TableCell className="flex items-center">
              <Button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <span className="mx-2 flex gap-2">
                <span>{currentPage}</span> <span>of</span> <span>{totalPages}</span>
              </span>
              <Button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
