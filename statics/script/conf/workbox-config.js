module.exports = {
	globDirectory: './', 
	globPatterns: [
		'**/*.{html,css,js,png,jpg}',
	  ],
	globIgnores: [
	  '**/$RECYCLE.BIN/**', // Ignore system folders like $RECYCLE.BIN
	  '**/*.map',           // Ignore source maps
	  '**/sw.js',           // Don't precache the service worker itself
	  '**/service-worker.js',           // Don't precache the service worker itself
	],
	swDest: './dist/service-worker.js',
	// Enable clientsClaim and skipWaiting for automatic service worker updates
	clientsClaim: true,
	skipWaiting: true,
  
	// Add runtime caching configuration
	runtimeCaching: [
	  {
		urlPattern: /\.(?:png|jpg|jpeg|gif|svg|webp)$/, // Match image files
		handler: 'CacheFirst', // Cache image files with CacheFirst strategy
		options: {
		  cacheName: 'image-cache', // Name of the cache
		  expiration: {
			maxEntries: 50, // Max number of cached images
			maxAgeSeconds: 24 * 60 * 60, // Expire after 1 day
		  },
		},
	  },
	  {
		urlPattern: /\/$/, // Match JS and CSS files
		handler: 'StaleWhileRevalidate', // Use stale while revalidate strategy
		options: {
		  cacheName: 'static-cache', // Name of the cache
		  expiration: {
			maxEntries: 50, // Max number of cached static files
			maxAgeSeconds: 7 * 24 * 60 * 60, // Cache for 1 week
		  },
		},
	  },
	  {
		urlPattern: /\.(?:html|js|css)$/, // Match JS and CSS files
		handler: 'StaleWhileRevalidate', // Use stale while revalidate strategy
		options: {
		  cacheName: 'static-cache', // Name of the cache
		  expiration: {
			maxEntries: 50, // Max number of cached static files
			maxAgeSeconds: 7 * 24 * 60 * 60, // Cache for 1 week
		  },
		},
	  },
	  {
		urlPattern: /\/api\/.*\/*.json/, // Match API requests
		handler: 'NetworkFirst', // Use network first strategy
		options: {
		  cacheName: 'api-cache',
		  networkTimeoutSeconds: 10, // Timeout after 10 seconds
		  expiration: {
			maxEntries: 20,
			maxAgeSeconds: 5 * 60, // Cache for 5 minutes
		  },
		},
	  },
	],
  };
  