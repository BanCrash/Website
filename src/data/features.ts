import Cloud from "@fluentui/svg-icons/icons/cloud_24_regular.svg?raw";
import Tag from "@fluentui/svg-icons/icons/tag_24_regular.svg?raw";
import TabDesktop from "@fluentui/svg-icons/icons/tab_desktop_20_regular.svg?raw";
import EyeVisible from "@fluentui/svg-icons/icons/eye_show_20_regular.svg?raw";

export interface FeatureCardData {
	title: string;
	description: string;
	icon: any;
}

export interface CloudFile {
	name: string;
	icon: "folder" | "exe" | "music" | "zip" | "note" | "video" | "picture";
	syncStatus: "success" | "sync";
}

export interface Tag {
	name: string;
	color: string;
	contents: CloudFile[];
}

export const featureCards: FeatureCardData[] = [
	{
		title: "Seamless cloud integration",
		description:
			"Integration with cloud services such as OneDrive, Google Drive, and iCloud allow you to manage your documents and photos in the cloud, right from the sidebar.",
		icon: Cloud
	},
	{
		title: "File preview",
		description:
			"Preview documents, photos, and more without opening them. Support for rich previews, syntax highlighting, markdown and video playback is all built in.",
		icon: EyeVisible
	},
	{
		title: "Tagged Files & Folders",
		description:
			"Quickly mark and organize your files and folders for later by assigning them colored and named tags for easy identification. You can even add your own custom tags!",
		icon: Tag
	},
	{
		title: "Multitask with tabs",
		description:
			"Avoid multiple windows and keep your desktop clutter-free. Files features a browser-like tabbing interface complete with keyboard shortcuts.",
		icon: TabDesktop
	}
];

export const cloudFiles: CloudFile[] = [
	{
		name: "GitHub",
		icon: "folder",
		syncStatus: "success"
	},
	{
		name: "electron-v1.4.13-win32-ia32.zip",
		icon: "zip",
		syncStatus: "sync"
	},
	{
		name: "start.js",
		icon: "note",
		syncStatus: "success"
	},
	{
		name: "2021-08-05 15.03.05.mp4",
		icon: "video",
		syncStatus: "success"
	},
	{
		name: "christmas-card-2017.png",
		icon: "picture",
		syncStatus: "success"
	},
	{
		name: "install.bat",
		icon: "exe",
		syncStatus: "success"
	},
	{
		name: "dQw4w9WgXcQ.mp3",
		icon: "music",
		syncStatus: "success"
	}
];

export const previewFiles = [
	{
		name: "June 2018",
		icon: "/ui/icons/folder.png",
		items: 3,
		added: "Thursday, June 21, 2018 11:24 AM",
		modified: "Sunday, November 15, 2020 6:50 PM",
		path: "C:\\Users\\Sara\\Desktop\\June 2018"
	},
	{
		name: "waves",
		extension: "png",
		icon: "/preview-samples/waves.png",
		bitDepth: 24,
		dimensions: {
			horizontal: 1496,
			vertical: 960
		},
		dpi: {
			horizontal: 72,
			vertical: 72
		},
		added: "Sunday, August 1, 2021 12:34 AM",
		modified: "Monday, August 9, 2021 12:34 AM",
		path: "C:\\Users\\Sara\\Pictures\\waves.png"
	},
	{
		name: "index",
		extension: "html",
		icon: "/ui/icons/note.png",
		added: "Wednesday, July 14, 2021 8:47 PM",
		modified: "Monday, July 31, 2021 4:32 AM",
		path: "C:\\Users\\Sara\\Documents\\index.html"
	},
	{
		name: "main",
		extension: "cpp",
		icon: "/ui/icons/cpp.svg",
		added: "Monday, June 28, 2021 8:20 AM",
		modified: "Monday, July 12, 2021 1:30 PM",
		lineCount: 8,

		// Yep, this is a very ugly way to do this, but
		// PrismJS and shiki both have extremely poor
		// documentation and support for SvelteKit, and
		// I don't want to add another highlighter
		// just for something completely decorative.
		code: `<span class="macro property"><span class="directive-hash">#</span><span class="directive keyword">include</span> <span class="string">&lt;iostream&gt;</span></span>

<span class="keyword">using</span> <span class="keyword">namespace</span> std<span class="punctuation">;</span>

<span class="keyword">int</span> <span class="function">main</span><span class="punctuation">(</span><span class="punctuation">)</span>
<span class="punctuation">{</span>
cout <span class="operator">&lt;&lt;</span> <span class="string">"Hello World"</span> <span class="operator">&lt;&lt;</span> endl<span class="punctuation">;</span>
<span class="keyword">return</span> <span class="number">0</span><span class="punctuation">;</span>
<span class="punctuation">}</span>`,
		path: "C:\\Users\\Sara\\Documents\\GitHub\\\\waves.png"
	}
];

export const tags: Tag[] = [
	{
		name: "Blue",
		color: "#0072bd",
		contents: [
			{
				name: "src",
				icon: "folder",
				syncStatus: "success"
			},
			{
				name: "package.json",
				icon: "note",
				syncStatus: "success"
			}
		]
	},
	{
		name: "Orange",
		color: "#d95319",
		contents: [
			{
				name: "Pictures",
				icon: "folder",
				syncStatus: "sync"
			},
			{
				name: "Documents",
				icon: "folder",
				syncStatus: "success"
			},
			{
				name: "Videos",
				icon: "folder",
				syncStatus: "sync"
			},
			{
				name: "Games",
				icon: "folder",
				syncStatus: "sync"
			}
		]
	},
	{
		name: "Yellow",
		color: "#edb120"
	},
	{
		name: "Green",
		color: "#77ac30"
	},
	{
		name: "Azure",
		color: "#4dbeee"
	},
	{
		name: "Gray",
		color: "#9ea3a1"
	}
];