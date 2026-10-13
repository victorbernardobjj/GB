import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import { defineConfig, Plugin } from 'vite';

const SLUG_TO_FILE: Record<string, string> = {
  '/pequenos-campeoes': 'pequenos-campeoes.jpg',
  '/jiu-jitsu-kids': 'jiu-jitsu-kids.jpg',
  '/jiu-jitsu-juniores': 'jiu-jitsu-juniores.jpg',
  '/jiu-jitsu-adulto': 'jiu-jitsu-adulto.jpg',
  '/jiu-jitsu-feminino': 'jiu-jitsu-feminino.jpg',
  '/muay-thai': 'muay-thai.jpg',
  '/karate': 'karate.jpg',
  '/mma': 'mma.jpg',
  '/krav-maga': 'krav-maga.jpg',
  '/hapkido': 'hapkido.jpg',
  'home-hero': 'hero-home.jpg',
  'horarios-hero': 'hero-horarios.jpg',
  'uniforme-hero': 'hero-uniforme.jpg',
  'localizacao-hero': 'hero-localizacao.jpg',
  'estrutura-tatame': 'estrutura-tatame.jpg',
  'estrutura-vestiarios': 'estrutura-vestiarios.jpg',
  'estrutura-convivencia': 'estrutura-convivencia.jpg',
  'estrutura-striking': 'estrutura-striking.jpg',
  'depoimento-test-1': 'depoimento-rodrigo.jpg',
  'depoimento-test-2': 'depoimento-camila.jpg',
  'depoimento-test-3': 'depoimento-lucas.jpg',
  'logo-gb': 'logo-gb.png',
};

function photoSyncPlugin(): Plugin {
  return {
    name: 'photo-sync-plugin',
    configureServer(server) {
      server.middlewares.use('/api/save-default-photos', (req, res) => {
        if (req.method === 'POST') {
          let body = '';
          req.on('data', (chunk) => {
            body += chunk;
          });
          req.on('end', () => {
            try {
              const data = JSON.parse(body);
              const imagesDir = path.resolve(__dirname, 'public/images');
              if (!fs.existsSync(imagesDir)) {
                fs.mkdirSync(imagesDir, { recursive: true });
              }

              const saved: string[] = [];
              for (const [slug, dataUrl] of Object.entries(data)) {
                if (typeof dataUrl !== 'string' || !dataUrl.startsWith('data:image/')) continue;
                const fileName = SLUG_TO_FILE[slug];
                if (!fileName) continue;

                const base64Data = dataUrl.replace(/^data:image\/\w+;base64,/, '');
                const buffer = Buffer.from(base64Data, 'base64');

                const targetPath =
                  slug === 'logo-gb'
                    ? path.resolve(__dirname, 'public/logo-gb.png')
                    : path.resolve(imagesDir, fileName);

                fs.writeFileSync(targetPath, buffer);
                saved.push(fileName);
              }

              fs.writeFileSync(
                path.resolve(imagesDir, 'active-custom-photos.json'),
                JSON.stringify({ saved, updatedAt: new Date().toISOString() }, null, 2)
              );

              res.setHeader('Content-Type', 'application/json');
              res.statusCode = 200;
              res.end(JSON.stringify({ success: true, saved }));
            } catch (err) {
              console.error('Error saving photos to disk:', err);
              res.statusCode = 500;
              res.end(JSON.stringify({ success: false, error: String(err) }));
            }
          });
          return;
        }

        res.statusCode = 405;
        res.end(JSON.stringify({ error: 'Method not allowed' }));
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), photoSyncPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      host: '0.0.0.0',
      port: 3000,
      allowedHosts: true as const,
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
