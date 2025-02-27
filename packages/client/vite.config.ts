import path from 'node:path'
import react from '@vitejs/plugin-react'
import buildStatistics from 'rollup-plugin-build-statistics'
import { defineConfig, loadEnv } from 'vite'
import viteCompression from 'vite-plugin-compression'
import removeConsole from 'vite-plugin-remove-console'
import { logAppSettings } from './configs/vite/logAppSetting'
import { setProxyConfig } from './configs/vite/proxy.config'

// biome-ignore lint/style/noDefaultExport: for vite config it's necessary
export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), 'SCREENING_')
	Object.assign(process.env, env)
	// show start info in console
	console.table(logAppSettings(mode))

	return {
		appType: 'spa',
		envPrefix: 'SCREENING_',
		css: {
			preprocessorOptions: {
				sass: {
					api: 'modern',
				},
			},
		},
		plugins: [
			react(),
			viteCompression({
				verbose: true,
				disable: mode === 'development',
			}),
			removeConsole(),
		],
		resolve: {
			alias: {
				'@': path.resolve(__dirname, './src'),
				'@app': path.resolve(__dirname, './src/app'),
				'@pages': path.resolve(__dirname, './src/pages'),
				'@widgets': path.resolve(__dirname, './src/widgets'),
				'@features': path.resolve(__dirname, './src/features'),
				'@entities': path.resolve(__dirname, './src/entities'),
				'@shared': path.resolve(__dirname, './src/shared'),
				'@global': path.resolve(__dirname, './src/global'),
				'@types': path.resolve(__dirname, './src/types'),
			},
		},
		server: {
			host: env.SCREENING_HOST || '0.0.0.0',
			port: Number(env.SCREENING_PORT),
			strictPort: false,
			proxy: setProxyConfig(mode),
			open: false,
		},
		preview: {
			port: Number(env.SCREENING_PORT),
			strictPort: true,
			proxy: setProxyConfig(mode),
		},
		build: {
			manifest: true,
			rollupOptions: {
				plugins: [
					buildStatistics({
						projectName: 'SCREENING',
					}),
				],
				maxParallelFileOps: 20,
			},
			chunkSizeWarningLimit: 300,
		},
	}
})
