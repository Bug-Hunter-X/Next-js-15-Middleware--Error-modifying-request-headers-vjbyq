```javascript
// pages/api/middleware.js
import { NextResponse } from 'next/server'

export function middleware(req) {
  const response = NextResponse.next();
  // Ensure headers are set properly, avoiding potential conflicts
  response.headers.set('X-Custom-Header', 'test');
  return response;
}

export const config = {
  matcher: ['/']
}
```