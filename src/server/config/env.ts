/**
 * 环境变量配置
 *
 * 集中管理和类型化环境变量
 */

// 应用配置
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
export const NODE_ENV = process.env.NODE_ENV || "development";
export const IS_PRODUCTION = NODE_ENV === "production";
export const IS_DEVELOPMENT = NODE_ENV === "development";

// 数据库配置
export const DATABASE_URL = process.env.DATABASE_URL;

// API密钥
export const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
export const UNSPLASH_API_KEY = process.env.UNSPLASH_API_KEY;

// 认证配置
export const JWT_SECRET = process.env.JWT_SECRET;
export const NEXTAUTH_URL = process.env.NEXTAUTH_URL || APP_URL;
export const NEXTAUTH_SECRET = process.env.NEXTAUTH_SECRET;

// 验证环境变量
export function validateEnv() {
	const requiredEnvs: Record<string, string | undefined> = {
		// 添加生产环境必须的环境变量
	};

	if (IS_PRODUCTION) {
		const missingEnvs = Object.entries(requiredEnvs)
			.filter(([_, value]) => !value)
			.map(([key]) => key);

		if (missingEnvs.length > 0) {
			throw new Error(`Missing required environment variables: ${missingEnvs.join(", ")}`);
		}
	}
}
