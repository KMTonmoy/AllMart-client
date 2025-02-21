'use client'
import { UserOutlined, SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import React, { useContext } from 'react';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import Link from 'next/link';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


import {
    Cloud,
    CreditCard,
    Github,
    Keyboard,
    LifeBuoy,
    LogOut,
    Mail,
    MessageSquare,
    Plus,
    PlusCircle,
    Settings,
    User,
    UserPlus,
    Users,
} from "lucide-react"


const womenCategories = [
    { id: '1', label: 'Dresses' },
    { id: '2', label: 'Tops & Tees' },
    { id: '3', label: 'Skirts' },
    { id: '4', label: 'Jackets & Coats' },
    { id: '5', label: 'Sweaters' },
    { id: '6', label: 'Swimwear' },
    { id: '7', label: 'Boots' },
    { id: '8', label: 'T-shirt' },
    { id: '9', label: 'Shoes' },
];

const menCategories = [
    { id: '15', label: 'T-Shirts' },
    { id: '25', label: 'Tanks' },
    { id: '35', label: 'Polos' },
    { id: '45', label: 'Leather' },
    { id: '55', label: 'Janeiro Stores' },
    { id: '65', label: 'Necessary Clothing' },
    { id: '75', label: 'Express Clothes' },
    { id: '85', label: 'Spark Pretty' },
    { id: '95', label: 'Warm' },
    { id: '150', label: 'Celebrationr' },
    { id: '151', label: "Men's Shoes" },
    { id: '152', label: 'Persion Gallery' },
    { id: '153', label: 'Universal Standard' },
    { id: '154', label: 'Designer Promise' },
    { id: '155', label: 'Flagship Store' },
    { id: '156', label: 'Urban Outfitters' },
    { id: '157', label: 'Boathouse' },
    { id: '158', label: 'Attraction' },
    { id: '159', label: 'Pepe Jeans' },
    { id: '250', label: 'Think Twice' },
    { id: '251', label: 'Fashion Store' },
];

const generateMenuItems = (items: { id: string; label: string }[]): MenuProps['items'] => {
    return items.map(({ id, label }) => ({
        key: id,
        label: <a href={`/shop/${label}`}>{label}</a>,
    }));
};
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { AuthContext } from '@/Provider/AuthProvider';

const { user } = useContext(AuthContext)
console.log(user)
const Navbar = () => {
    return (
        <div className='pb-5'>
            <div className="border-b">
                <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-5">
                    <Link href="/">
                        <div className="flex items-center gap-2">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/3225/3225209.png"
                                className="w-[50px] h-[50px]"
                            />
                            <h1 className="md:block hidden">All Mart</h1>
                        </div>
                    </Link>

                    <div className="flex items-center space-x-3">
                        <input
                            type="text"
                            className="md:w-[700px] w-[250px] hover:text-orange-600 duration-300 outline-none border p-[15px] rounded-full"
                            placeholder="WHAT ARE YOU LOOKING FOR ?"
                        />
                        <button className="relative bg-orange-500 rounded-full w-[40px] h-[40px] -left-[50px]">
                            <SearchOutlined />
                        </button>



                    </div>
                    <div>
                        {user ? (
                            <>
                                <div>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>


                                            <Avatar>
                                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                                <AvatarFallback>CN</AvatarFallback>
                                            </Avatar>


                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className="w-56">
                                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuGroup>
                                                <DropdownMenuItem>
                                                    <User />
                                                    <span>Profile</span>
                                                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <CreditCard />
                                                    <span>Dashboard</span>
                                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <Settings />
                                                    <span>Settings</span>
                                                    <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                                                </DropdownMenuItem>

                                            </DropdownMenuGroup>


                                            <DropdownMenuItem>
                                                <LifeBuoy />
                                                <span>Support</span>
                                            </DropdownMenuItem>

                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem>
                                                <LogOut />
                                                <span>Log out</span>
                                                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                            </>
                        ) : (

                            <div className="flex gap-3 items-center">
                                <Link href={'/login'}>
                                    <p className="text-[20px] md:text-[26px]">
                                        <UserOutlined />
                                    </p>
                                    <p className="text-[7px] md:text-[10px] font-[600] hover:text-orange-600 duration-300">LOG IN</p>
                                </Link >
                                <button>
                                    <p className="text-[20px] md:text-[26px]">
                                        <ShoppingCartOutlined />
                                    </p>
                                    <p className="text-[7px] md:text-[10px] font-[600] hover:text-orange-600 duration-300">MY CART</p>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="max-w-7xl px-5 mt-2 mx-auto">
                <Space direction="vertical">
                    <Space wrap className="flex gap-4">
                        <Dropdown menu={{ items: generateMenuItems(womenCategories) }} placement="bottomLeft">
                            <p className="cursor-pointer font-[600] hover:text-orange-600 duration-300 text-[13px]">Women</p>
                        </Dropdown>
                        <Dropdown menu={{ items: generateMenuItems(menCategories) }} placement="bottomLeft">
                            <p className="cursor-pointer font-[600] hover:text-orange-600 duration-300 text-[13px]">Men</p>
                        </Dropdown>
                        <a href="shop/baby">
                            <p className="cursor-pointer font-[600] hover:text-orange-600 duration-300 text-[13px]">Youth & Baby</p>
                        </a>
                        <a href="shop/baby">
                            <p className="cursor-pointer font-[600] hover:text-orange-600 duration-300 text-[13px]">Home & Living</p>
                        </a>
                        <a href="shop/baby">
                            <p className="cursor-pointer font-[600] hover:text-orange-600 duration-300 text-[13px]">Phone Case</p>
                        </a>
                        <a href="shop/baby">
                            <p className="cursor-pointer font-[600] hover:text-orange-600 duration-300 text-[13px]">Accessories</p>
                        </a>
                        <a href="shop/baby">
                            <p className="cursor-pointer font-[600] hover:text-orange-600 duration-300 text-[13px]">Mugs</p>
                        </a>
                        <a href="shop/baby">
                            <p className="cursor-pointer font-[600] hover:text-orange-600 duration-300 text-[13px]">Jewelry</p>
                        </a>
                        <a href="shop/baby">
                            <p className="cursor-pointer font-[600] hover:text-orange-600 duration-300 text-[13px]">Contact Us</p>
                        </a>





                    </Space>
                </Space>
            </div>
        </div>
    );
};

export default Navbar;
