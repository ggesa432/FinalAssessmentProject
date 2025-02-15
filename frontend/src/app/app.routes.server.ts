import { RenderMode, ServerRoute } from '@angular/ssr';

// Function to get parameters for prerendering
function getPrerenderParams(): Promise<Record<string, string>[]> {
 return new Promise((resolve) => {
  // You can define logic to determine parameters here
  resolve([{ id: '123' }]); // Example: returning a fixed id for demonstration
 });
}

export const serverRoutes: Array<ServerRoute> = [
 {
  path: 'update-employee/:id', // Route for updating an employee
  renderMode: RenderMode.Prerender, // Prerender this route
  getPrerenderParams // Attach the function without arguments
 },
 {
  path: 'employees',
  renderMode: RenderMode.Prerender // Route for the employees page
 },
 {
  path: 'create-employees',
  renderMode: RenderMode.Prerender // Route for creating an employee
 },
 {
  path: 'details-employee/:id',
  renderMode: RenderMode.Prerender, // Prerender this route
  getPrerenderParams // Dynamic route for viewing employee details
 },
 {
  path: '**',
  renderMode: RenderMode.Prerender // Catch-all route for all other paths
 }
];
