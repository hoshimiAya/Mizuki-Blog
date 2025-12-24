// Skill data configuration file
// Used to manage data for the skill display page

export interface Skill {
	id: string;
	name: string;
	description: string;
	icon: string; // Iconify icon name
	category: "languages" | "frameworks" | "tools" | "other";
	level: "beginner" | "intermediate" | "advanced" | "expert";
	experience: {
		years: number;
		months: number;
	};
	projects?: string[]; // Related project IDs
	certifications?: string[];
	color?: string; // Skill card theme color
}

export const skillsData: Skill[] = [
	// C++
	{
		id: "cpp",
		name: "C++",
		description: "通用的系统与高性能编程语言，支持面向对象与底层内存控制。",
		icon: "logos:c-plusplus",
		category: "languages",
		level: "advanced",
		experience: { years: 3, months: 0 },
		projects: [],
		certifications: [],
		color: "#00599C",
	},

	// Qt
	{
		id: "qt",
		name: "Qt",
		description: "基于 C++ 的跨平台 GUI 框架，支持 QWidget 与 QML。",
		icon: "logos:qt",
		category: "frameworks",
		level: "intermediate",
		experience: { years: 1, months: 6 },
		projects: [],
		certifications: [],
		color: "#41CD52",
	},

	// OpenCV
	{
		id: "opencv",
		name: "OpenCV",
		description: "开源计算机视觉库，用于图像处理与视觉算法实现。",
		icon: "logos:opencv",
		category: "frameworks",
		level: "intermediate",
		experience: { years: 1, months: 0 },
		projects: [],
		certifications: [],
		color: "#5C3EE8",
	},

	// VSCode
	{
		id: "vscode",
		name: "VSCode",
		description: "轻量可扩展的代码编辑器，拥有丰富扩展与调试支持。",
		icon: "logos:visual-studio-code",
		category: "tools",
		level: "advanced",
		experience: { years: 3, months: 0 },
		projects: [],
		certifications: [],
		color: "#007ACC",
	},

	// Visual Studio
	{
		id: "visual-studio",
		name: "Visual Studio",
		description: "功能齐全的集成开发环境，适用于大型 .NET 与 C++ 项目。",
		icon: "logos:visual-studio",
		category: "tools",
		level: "advanced",
		experience: { years: 3, months: 0 },
		projects: [],
		certifications: [],
		color: "#5C2D91",
	},

	// Git
	{
		id: "git",
		name: "Git",
		description: "分布式版本控制系统，广泛用于代码管理与团队协作。",
		icon: "logos:git",
		category: "tools",
		level: "advanced",
		experience: { years: 3, months: 0 },
		projects: [],
		certifications: [],
		color: "#F05032",
	},

	// SVN
	{
		id: "svn",
		name: "SVN",
		description: "集中式版本控制系统，常见于传统代码托管流程。",
		icon: "logos:subversion",
		category: "tools",
		level: "intermediate",
		experience: { years: 2, months: 6 },
		projects: [],
		certifications: [],
		color: "#809CC9",
	},

	// Astro
	{
		id: "astro",
		name: "Astro",
		description: "面向内容的静态网站框架，优化页面构建与加载性能。",
		icon: "logos:astro",
		category: "frameworks",
		level: "beginner",
		experience: { years: 0, months: 1 },
		projects: [],
		certifications: [],
		color: "#FF5B00",
	},

	// HTML
	{
		id: "html",
		name: "HTML",
		description: "用于构建网页结构的标记语言。",
		icon: "logos:html-5",
		category: "languages",
		level: "beginner",
		experience: { years: 0, months: 1 },
		projects: [],
		certifications: [],
		color: "#E34F26",
	},

	// CSS
	{
		id: "css",
		name: "CSS",
		description: "用于为网页添加样式与布局的层叠样式表。",
		icon: "logos:css-3",
		category: "languages",
		level: "beginner",
		experience: { years: 0, months: 1 },
		projects: [],
		certifications: [],
		color: "#1572B6",
	},

	// JavaScript
	{
		id: "javascript",
		name: "JavaScript",
		description: "浏览器端常用脚本语言，用于交互与前端逻辑。",
		icon: "logos:javascript",
		category: "languages",
		level: "beginner",
		experience: { years: 0, months: 1 },
		projects: [],
		certifications: [],
		color: "#F7DF1E",
	},

	// Python
	{
		id: "python",
		name: "Python",
		description: "通用的高级编程语言，适用于脚本、数据与后端开发。",
		icon: "logos:python",
		category: "languages",
		level: "beginner",
		experience: { years: 0, months: 1 },
		projects: [],
		certifications: [],
		color: "#3776AB",
	},
];

// Get skill statistics
export const getSkillStats = () => {
	const total = skillsData.length;
	const byLevel = {
		beginner: skillsData.filter((s) => s.level === "beginner").length,
		intermediate: skillsData.filter((s) => s.level === "intermediate").length,
		advanced: skillsData.filter((s) => s.level === "advanced").length,
		expert: skillsData.filter((s) => s.level === "expert").length,
	};
	const byCategory = {
		languages: skillsData.filter((s) => s.category === "languages").length,
		frameworks: skillsData.filter((s) => s.category === "frameworks").length,
		tools: skillsData.filter((s) => s.category === "tools").length,
		other: skillsData.filter((s) => s.category === "other").length,
	};

	return { total, byLevel, byCategory };
};

// Get skills by category
export const getSkillsByCategory = (category?: string) => {
	if (!category || category === "all") {
		return skillsData;
	}
	return skillsData.filter((s) => s.category === category);
};

// Get advanced skills
export const getAdvancedSkills = () => {
	return skillsData.filter(
		(s) => s.level === "advanced" || s.level === "expert",
	);
};

// Calculate total years of experience
export const getTotalExperience = () => {
	const totalMonths = skillsData.reduce((total, skill) => {
		return total + skill.experience.years * 12 + skill.experience.months;
	}, 0);
	return {
		years: Math.floor(totalMonths / 12),
		months: totalMonths % 12,
	};
};
