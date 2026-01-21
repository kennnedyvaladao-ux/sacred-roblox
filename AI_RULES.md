# AI Development Rules - Shadow Chat Project

## Tech Stack
*   **Framework**: React 18 with Vite as the build tool.
*   **Language**: TypeScript for type-safe development.
*   **Styling**: Tailwind CSS for utility-first styling.
*   **Components**: shadcn/ui (built on Radix UI) for accessible, unstyled components.
*   **Icons**: Lucide React for consistent iconography.
*   **Animations**: Framer Motion for high-performance transitions and scroll effects.
*   **Routing**: React Router DOM (v6+) for client-side navigation.
*   **State Management**: TanStack Query (React Query) for server-state and caching.
*   **Forms**: React Hook Form combined with Zod for schema validation.

## Library Usage Rules
*   **Styling**: Always use Tailwind CSS classes. Avoid inline styles or CSS modules unless absolutely necessary for complex dynamic calculations.
*   **Icons**: Use `lucide-react`. Do not import icons from other libraries like FontAwesome or HeroIcons.
*   **UI Components**: Prioritize using existing components in `src/components/ui/`. If a new component is needed, check if it's available in shadcn/ui first.
*   **Animations**: Use `framer-motion` for all entrance, scroll, and hover animations. Keep them subtle and consistent with the "gaming" aesthetic.
*   **Data Fetching**: Use `useQuery` or `useMutation` from `@tanstack/react-query` for any API interactions.
*   **Navigation**: Use the custom `NavLink` component or `useNavigate` from `react-router-dom`.
*   **Color Palette**: Stick to the defined CSS variables in `index.css` (e.g., `primary`, `accent`, `gaming-red`, `gaming-purple`) to maintain the dark gaming theme.
*   **Responsiveness**: Always build "mobile-first" using Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`).

## File Structure
*   `src/components/`: Reusable UI elements and landing sections.
*   `src/pages/`: Main route components (e.g., `Index.tsx`).
*   `src/hooks/`: Custom React hooks.
*   `src/lib/`: Utility functions and third-party configurations.