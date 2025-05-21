/**
 * 合并类名，支持条件类名
 *
 * 用法示例:
 * classNames('text-lg', { 'text-red-500': isError, 'text-green-500': isSuccess }, isActive && 'bg-blue-100')
 */
export function classNames(...classes: (string | false | null | undefined | Record<string, boolean>)[]): string {
	return classes
		.filter(Boolean)
		.map((cls) => {
			if (typeof cls === "string") {
				return cls.trim();
			}
			if (cls && typeof cls === "object") {
				return Object.keys(cls)
					.filter((key) => cls[key])
					.map((key) => key.trim())
					.join(" ");
			}
			return "";
		})
		.join(" ")
		.trim();
}
