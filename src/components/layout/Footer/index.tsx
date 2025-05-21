"use client";

import { Layout } from "antd";
import Link from "next/link";

const { Footer: AntFooter } = Layout;

const Footer = () => {
	return (
		<AntFooter className="bg-white border-t py-6 text-center text-sm text-gray-500">
			<div className="container mx-auto">
				<div className="flex flex-col md:flex-row justify-between items-center">
					<div>© {new Date().getFullYear()} Learn Hub of KarlsBeard. All rights reserved.</div>
					<div className="mt-4 md:mt-0 space-x-4">
						<Link href="/about" className="hover:text-blue-600">
							关于
						</Link>
						<Link href="/terms" className="hover:text-blue-600">
							条款
						</Link>
						<Link href="/privacy" className="hover:text-blue-600">
							隐私
						</Link>
					</div>
				</div>
			</div>
		</AntFooter>
	);
};

export default Footer;
