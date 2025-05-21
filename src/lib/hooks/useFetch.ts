"use client";

import { useState, useEffect, useCallback } from "react";

interface UseFetchOptions {
	headers?: HeadersInit;
	immediate?: boolean;
}

interface UseFetchReturn<T> {
	data: T | null;
	loading: boolean;
	error: Error | null;
	fetchData: () => Promise<T | null>;
}

/**
 * 数据获取Hook，支持加载状态和错误处理
 *
 * @param url - API端点URL
 * @param options - 请求选项
 * @returns 包含数据、加载状态、错误和重新获取方法的对象
 */
export function useFetch<T>(url: string, options: UseFetchOptions = {}): UseFetchReturn<T> {
	const { headers = {}, immediate = true } = options;
	const [data, setData] = useState<T | null>(null);
	const [loading, setLoading] = useState<boolean>(immediate);
	const [error, setError] = useState<Error | null>(null);

	// 使用useCallback缓存fetchData函数，避免重复创建
	const fetchData = useCallback(async (): Promise<T | null> => {
		setLoading(true);
		setError(null);

		try {
			const response = await fetch(url, {
				headers: {
					"Content-Type": "application/json",
					...headers,
				},
			});

			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}

			const result = await response.json();
			setData(result);
			return result;
		} catch (err) {
			const fetchError = err instanceof Error ? err : new Error("An unknown error occurred");
			setError(fetchError);
			return null;
		} finally {
			setLoading(false);
		}
	}, [url, headers]); // 添加url和headers作为依赖项

	// 修复useEffect的依赖项
	useEffect(() => {
		if (immediate) {
			fetchData();
		}
	}, [fetchData, immediate]); // 添加fetchData和immediate作为依赖项

	return { data, loading, error, fetchData };
}
