import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon, HeartFilledIcon } from "@/components/icons";
import {Input} from "@nextui-org/input";
import { Button } from "@nextui-org/button";


export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title()}>Effortless M3U8 to MP4 Conversion</h1>
				<h2 className={subtitle({ class: "mt-4" })}>
					Unlock the power of seamless multimedia transformation.
				</h2>
			</div>

			<div className="flex gap-3 mt-6">
				<Link
					isExternal
					href="#replace-with-your-documentation-link"
					className={buttonStyles({
						color: "primary",
						radius: "full",
						variant: "shadow",
					})}
				>
					Documentation
				</Link>
				<Link
					isExternal
					className={buttonStyles({ variant: "bordered", radius: "full" })}
					href="#replace-with-your-github-link"
				>
					<GithubIcon size={20} />
					GitHub
				</Link>
			</div>

			<div className="mt-8 w-full max-w-lg flex gap-2  flex-col">

				<Input  className="w-full" radius="lg" type="text"  placeholder="Enter M3U8 url" />
				<Button
					className="text-sm font-normal  text-default-600 bg-default-100"
					variant="flat"
				>
				Convert
				</Button>
			</div>
		</section>
	);
}
