import esbuild, {BuildOptions} from 'esbuild';
import nodeExternals from 'esbuild-node-externals';

const options: BuildOptions = {
	logLevel: 'debug',
	entryPoints: ['./src/cli.ts'],
	bundle: true,
	outfile: './dist/app.bundle.js',
	platform: 'node',
	target: 'node16',
	plugins: [nodeExternals()]
};

(async () => {
	esbuild.build(options);
})();
