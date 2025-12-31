# CLAUDE.md - AI Assistant Guide for Resolutions Reimagined

## Project Overview

**Resolutions Reimagined** is a web application that helps users transform their New Year's resolutions and goals into actionable, step-by-step plans. The application uses OpenAI's GPT model to generate personalized action steps based on user input.

**Primary Function**: Users enter a goal, choose between 5 or 10 steps, and receive an AI-generated action plan with specific, actionable steps to achieve their goal.

**Project URL**: https://lovable.dev/projects/cf54362b-abcf-4fd6-aebb-7ad0b7a2d236

## Tech Stack

### Frontend
- **React 18.3.1** - UI framework
- **TypeScript 5.5.3** - Type-safe JavaScript
- **Vite 5.4.1** - Build tool and dev server
- **React Router 6.26.2** - Client-side routing
- **TanStack Query 5.56.2** - Server state management

### UI Components & Styling
- **shadcn/ui** - Reusable component library (based on Radix UI)
- **Tailwind CSS 3.4.11** - Utility-first CSS framework
- **Framer Motion 11.15.0** - Animation library
- **Lucide React** - Icon library
- **class-variance-authority** - Component variant management
- **tailwind-merge** - Utility for merging Tailwind classes

### Backend & Data
- **Supabase** - Backend-as-a-Service (auth, database, edge functions)
- **Supabase Edge Functions** - Serverless functions (Deno runtime)
- **OpenAI API (GPT-4o-mini)** - AI text generation

### Development Tools
- **ESLint 9.9.0** - Linting with TypeScript support
- **Lovable Tagger** - Component tagging for Lovable platform
- **Bun** - Alternative package manager (lockfile present)

## Architecture & Directory Structure

```
resolutions-reimagined/
├── src/
│   ├── components/           # React components
│   │   ├── ui/              # shadcn/ui components (40+ components)
│   │   ├── ActionSteps.tsx  # Displays generated steps with animations
│   │   └── GoalInput.tsx    # User input for goals and step selection
│   ├── pages/               # Page components
│   │   └── Index.tsx        # Main landing page (only page)
│   ├── hooks/               # Custom React hooks
│   │   ├── use-toast.ts
│   │   └── use-mobile.tsx
│   ├── integrations/        # Third-party integrations
│   │   └── supabase/        # Supabase configuration
│   │       ├── client.ts    # Supabase client instance
│   │       └── types.ts     # Generated database types
│   ├── lib/                 # Utility functions
│   │   └── utils.ts         # Common utilities (cn, etc.)
│   ├── App.tsx              # Root component with providers
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles & Tailwind imports
├── supabase/
│   ├── functions/           # Edge functions
│   │   ├── generate-steps/  # OpenAI integration for step generation
│   │   │   └── index.ts
│   │   └── _shared/         # Shared utilities
│   │       └── cors.ts
│   └── config.toml          # Supabase configuration
├── public/                  # Static assets
├── Configuration Files:
│   ├── vite.config.ts       # Vite build configuration
│   ├── tsconfig.json        # TypeScript configuration (references)
│   ├── tsconfig.app.json    # App TypeScript config
│   ├── tsconfig.node.json   # Node TypeScript config
│   ├── tailwind.config.ts   # Tailwind CSS configuration
│   ├── components.json      # shadcn/ui configuration
│   ├── eslint.config.js     # ESLint configuration
│   ├── postcss.config.js    # PostCSS configuration
│   └── package.json         # Dependencies and scripts
```

## Key Architectural Patterns

### 1. Component Organization
- **UI Components**: Located in `src/components/ui/` - these are shadcn/ui components
- **Feature Components**: Located in `src/components/` - custom business logic components
- **Pages**: Located in `src/pages/` - route-level components

### 2. Data Flow
```
User Input (GoalInput.tsx)
    ↓
Index.tsx (generateSteps function)
    ↓
Supabase Edge Function (generate-steps)
    ↓
OpenAI API (GPT-4o-mini)
    ↓
Response parsed and displayed (ActionSteps.tsx)
```

### 3. State Management
- **Local State**: React `useState` for UI state
- **Server State**: TanStack Query (configured but minimal usage)
- **Toast Notifications**: Custom hook `use-toast` from shadcn/ui

## Important Files & Their Purposes

### Core Application Files

**src/pages/Index.tsx** (2922 lines)
- Main and only page of the application
- Contains `generateSteps()` function that calls Supabase edge function
- Manages step generation state and error handling
- Uses toast notifications for user feedback

**src/components/GoalInput.tsx** (1642 lines)
- Input component for users to enter goals
- Two buttons: "Get 5 Action Steps" and "Get 10 Action Steps"
- Validates goal input (minimum 3 characters)
- Purple accent color (#D946EF) on hover

**src/components/ActionSteps.tsx** (2199 lines)
- Displays generated steps with Framer Motion animations
- Each step has a lime green (#84cc16) left border
- Staggered animation (0.1s delay per step)
- Copy button to copy all steps to clipboard
- "Generate New Steps" button for regeneration

**src/App.tsx** (708 lines)
- Root component setting up providers:
  - QueryClientProvider (TanStack Query)
  - TooltipProvider (shadcn/ui)
  - BrowserRouter (React Router)
  - Toast components (Toaster + Sonner)

### Backend Files

**supabase/functions/generate-steps/index.ts**
- Deno-based edge function
- Accepts: `{ goal: string, stepCount: number }`
- Calls OpenAI API with GPT-4o-mini model
- Returns formatted response: `{ origin: data }`
- Handles CORS for browser requests
- Temperature set to 0.7 for balanced creativity

### Configuration Files

**vite.config.ts**
- Server runs on `::` (IPv6) port 8080
- Path alias: `@` → `./src`
- Plugins: React SWC, Lovable Tagger (dev only)

**tailwind.config.ts**
- Dark mode: class-based
- Custom colors using CSS variables
- Custom animations: accordion, pulse-slow
- Typography plugin enabled

**tsconfig.json**
- `noImplicitAny: false` - allows implicit any
- `strictNullChecks: false` - relaxed null checking
- `noUnusedLocals: false` - allows unused variables
- Path alias: `@/*` → `./src/*`

**eslint.config.js**
- TypeScript ESLint configuration
- React Hooks plugin enabled
- React Refresh warnings
- `@typescript-eslint/no-unused-vars: off`

## Development Conventions

### 1. Import Aliases
Always use the `@` alias for imports:
```typescript
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
```

### 2. Component Patterns
- Functional components with TypeScript
- Props interfaces defined above components
- Use `interface` for props (e.g., `GoalInputProps`, `ActionStepsProps`)

### 3. Styling Conventions
- **Primary Color**: Purple (`#D946EF`, `hsl(262 83% 58%)`)
- **Accent Color**: Lime green (`#84cc16`)
- **Success Toast**: Lime green background (`bg-[#ecfccb]`)
- **Gradient Background**: Custom `.gradient-bg` class in index.css
- Use Tailwind utility classes
- Use `cn()` utility from `@/lib/utils` for conditional classes

### 4. UI Component Usage
All UI components are from shadcn/ui:
```typescript
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
```

Available UI components (~40 total):
- Forms: Button, Input, Textarea, Select, Checkbox, Radio Group, Switch, Slider
- Layout: Card, Separator, Tabs, Accordion, Collapsible
- Feedback: Toast, Alert, Alert Dialog, Dialog, Drawer, Sheet
- Navigation: Navigation Menu, Dropdown Menu, Menubar, Breadcrumb
- Data: Table, Chart (Recharts integration)
- Other: Avatar, Badge, Calendar, Carousel, Progress, Tooltip, Popover

### 5. Animation Patterns
Using Framer Motion:
```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: index * 0.1 }}
>
```

### 6. Error Handling
- Try-catch blocks around async operations
- Toast notifications for user-facing errors
- Console logging for debugging (verbose in Index.tsx)
- Destructive variant for error toasts

### 7. Toast Notifications
Success pattern:
```typescript
toast({
  title: "Steps Generated!",
  description: "Your action plan is ready.",
  className: "bg-[#ecfccb] border-[#84cc16] text-[#365314]",
});
```

Error pattern:
```typescript
toast({
  title: "Error",
  description: error.message,
  variant: "destructive",
});
```

## Development Workflow

### Available Scripts
```bash
npm run dev        # Start dev server (Vite)
npm run build      # Production build
npm run build:dev  # Development build
npm run lint       # Run ESLint
npm run preview    # Preview production build
```

### Development Server
- Runs on port 8080
- Hot module replacement enabled
- IPv6 enabled (`::`)

### Working with Supabase

**Environment Variables** (Edge Functions):
- `OPENAI_API_KEY` - Required for generate-steps function

**Supabase Client**:
```typescript
import { supabase } from "@/integrations/supabase/client";

// Invoke edge function
const { data, error } = await supabase.functions.invoke("generate-steps", {
  body: { goal, stepCount },
});
```

**Configuration**:
- URL: `https://psvoravmfuwizyyyfeue.supabase.co`
- Publishable key is in `src/integrations/supabase/client.ts`

### Adding New shadcn/ui Components
The project uses shadcn/ui with this configuration:
```bash
npx shadcn@latest add [component-name]
```

Configuration (components.json):
- Style: default
- Base color: slate
- CSS variables: enabled
- TypeScript: enabled

## Common Development Tasks

### Adding a New Page
1. Create file in `src/pages/NewPage.tsx`
2. Add route in `src/App.tsx`:
```typescript
<Route path="/new-page" element={<NewPage />} />
```

### Adding a New Component
1. Create in `src/components/ComponentName.tsx`
2. Define props interface
3. Export as default or named export
4. Import using `@/components/ComponentName`

### Modifying the AI Prompt
Edit `supabase/functions/generate-steps/index.ts`:
- System message is in the `messages` array
- Adjust temperature (0.0-1.0) for creativity control
- Change model if needed (currently `gpt-4o-mini`)

### Updating Styles
Global styles:
- `src/index.css` - CSS variables, custom classes
- `tailwind.config.ts` - Theme extensions, colors, animations

Component styles:
- Use Tailwind utility classes
- Use `cn()` for conditional classes
- Custom gradients and animations defined in config

### Working with Forms
Pattern used in the app:
```typescript
const [value, setValue] = useState("");

const handleSubmit = () => {
  if (value.trim().length < 3) {
    toast({ /* validation error */ });
    return;
  }
  onSubmit(value);
};
```

## TypeScript Configuration Notes

### Relaxed Settings
The project uses relaxed TypeScript settings for rapid development:
- Implicit `any` allowed
- Unused variables allowed
- Strict null checks disabled
- Unused parameters allowed
- JavaScript files allowed

When working on this project:
- Type safety is encouraged but not strictly enforced
- Focus on functionality over strict typing
- Add types where it improves code clarity

## Best Practices for AI Assistants

### When Making Changes

1. **Preserve Existing Patterns**
   - Match the existing code style
   - Use the same import patterns
   - Follow the component structure conventions

2. **Styling**
   - Use Tailwind classes, not custom CSS
   - Maintain the purple (#D946EF) and lime green (#84cc16) color scheme
   - Use the `cn()` utility for conditional classes
   - Preserve animations and transitions

3. **Component Structure**
   - Keep components functional and concise
   - Define props interfaces above components
   - Use proper TypeScript types even with relaxed settings

4. **Testing Changes**
   - Run `npm run dev` to test locally
   - Check console for errors (the app logs verbosely)
   - Test edge function calls for API changes

5. **Supabase Edge Functions**
   - Test locally if possible
   - Remember functions run on Deno, not Node.js
   - CORS headers are required for browser access
   - Environment variables set via Supabase dashboard

### Common Gotchas

1. **Path Aliases**: Always use `@/` prefix, never relative imports
2. **UI Components**: Import from `@/components/ui/[component]`, not direct package imports
3. **Supabase Types**: Auto-generated in `src/integrations/supabase/types.ts`
4. **Edge Functions**: Use Deno imports (`https://deno.land/...`), not npm packages
5. **Build Tool**: This is Vite, not Create React App or Next.js

### File Modification Guidelines

**Files to modify freely:**
- `src/components/*` - Feature components
- `src/pages/*` - Page components
- `src/index.css` - Global styles (with care)
- `supabase/functions/generate-steps/index.ts` - AI prompt and logic

**Files to modify with caution:**
- `src/components/ui/*` - shadcn/ui components (prefer regenerating)
- `src/integrations/supabase/*` - Auto-generated files
- `vite.config.ts` - Build configuration
- `tailwind.config.ts` - Theme configuration

**Files to avoid modifying:**
- `package-lock.json` / `bun.lockb` - Managed by package managers
- `src/integrations/supabase/types.ts` - Auto-generated from Supabase
- Configuration files unless specifically requested

## Deployment

### Via Lovable Platform
The primary deployment method:
1. Changes committed to this repo auto-deploy via Lovable
2. Open Lovable project and click Share → Publish
3. Custom domains not supported (use Netlify for custom domains)

### Manual Deployment
1. Build: `npm run build`
2. Output: `dist/` directory
3. Deploy dist folder to any static hosting (Netlify, Vercel, etc.)

### Environment Requirements
- Supabase project must be configured
- OpenAI API key set in Supabase edge function secrets
- CORS properly configured for production domain

## Additional Resources

- **shadcn/ui Docs**: https://ui.shadcn.com
- **Tailwind CSS Docs**: https://tailwindcss.com
- **Supabase Docs**: https://supabase.com/docs
- **React Router Docs**: https://reactrouter.com
- **Framer Motion Docs**: https://www.framer.com/motion
- **Lovable Docs**: https://docs.lovable.dev

## Project History

Recent commits show focus on:
- Project rename to "Resolutions Reimagined"
- UI improvements (copy button, header adjustments)
- Testing AI suggestions

---

**Last Updated**: 2025-12-31
**Codebase Version**: Based on commit 0ed7d99
