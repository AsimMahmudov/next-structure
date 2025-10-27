// src/components/Hero.tsx

"use client";

import Button from "@/components/ui/button/Button";
import { Description } from "@/components/ui/text/Description";
import { TitleComponent } from "@/components/ui/text/TitleComponent";
import { GITHUB_LINK } from "@/constants/admin";
import Link from "next/link";
import React, { useState } from "react";
import { IoCodeSlash } from "react-icons/io5";
import GitCloneModal from "./GitCloneModal";
import Particle from "@/components/ui/particle";

const Hero = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<section className="relative w-full">
			{/* Секция с фиксированной высотой */}
			<div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden bg-black">
				<Particle />

				<div className="text-center flex flex-col -mt-[60px] justify-center items-center gap-5 relative z-10 max-w-3xl">
					<TitleComponent className="!text-4xl md:!text-5xl text-white">
						Next.js Structure 
					</TitleComponent>
						<Description className="text-gray-400">
							Современный стек: TypeScript, Tailwind CSS, Next.js 15 — всё для
							быстрого старта
					</Description>
					<Description className="text-gray-400">
						Просто замените этот текст — и ваш лендинг готов к разработке.
					</Description>
					<div className="flex  flex-row items-center gap-4 w-full max-w-[400px]">
						<Button
							className="gap-2 w-full"
							onClick={() => setIsModalOpen(true)}>
							<IoCodeSlash size={20} /> git clone
						</Button>
						<Link
							href={GITHUB_LINK}
							className="w-full"
							target="_blank"
							rel="noopener noreferrer">
							<Button className="w-full !bg-blue-600 hover:bg-blue-500">перейти в GitHub</Button>
						</Link>
					</div>
				</div>
			</div>

			<GitCloneModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
			/>
		</section>
	);
};

export default Hero;
