import { Search } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface LandingPageProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  onBuildPresentation: () => void;
  onQuickNavigate?: (stage: 'search' | 'customize' | 'export') => void;
}

export function LandingPage({ searchQuery, onSearchChange, onBuildPresentation, onQuickNavigate }: LandingPageProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onBuildPresentation();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex flex-col items-center justify-center px-6">
      <div className="max-w-4xl w-full text-center space-y-8">
        {/* Hero Section */}
        <div className="space-y-4">
          <h1 className="text-blue-600 tracking-tight">
            WikiPresentation Builder
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            From Wikipedia to Presentation in Seconds. Transform any Wikipedia article into a professional, 
            visually cohesive presentation deck tailored for your classroom.
          </p>
        </div>

        {/* Search Section */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-3 max-w-2xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Enter a Wikipedia topic, e.g., 'Photosynthesis', 'Roman Empire', 'Machine Learning'..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-12 h-14 text-base shadow-lg border-slate-200"
              />
            </div>
            <Button 
              type="submit"
              size="lg"
              className="h-14 px-8 bg-blue-600 hover:bg-blue-700 shadow-lg"
              disabled={!searchQuery.trim()}
            >
              Build Presentation
            </Button>
          </div>
          {!searchQuery.trim() && (
            <p className="text-slate-400 text-sm">
              What will you teach today? Search for a topic to begin.
            </p>
          )}
        </form>

        {/* Features Grid */}
        <div className="max-w-3xl mx-auto pt-12">
          <p className="text-center text-sm text-slate-500 mb-4">Click any feature below to jump to that step</p>
          <div className="grid grid-cols-3 gap-6">
          <button
            onClick={() => onQuickNavigate?.('search')}
            className="space-y-2 p-4 rounded-lg transition-all hover:bg-white/50 hover:shadow-md cursor-pointer text-center group border border-transparent hover:border-blue-200"
            aria-label="Quick Search - Navigate to Content Selection"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto transition-transform group-hover:scale-110">
              <Search className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-slate-700">Quick Search</h3>
            <p className="text-slate-500 text-sm">
              Find any Wikipedia topic instantly
            </p>
            <p className="text-xs text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
              → Go to Content Selection
            </p>
          </button>
          <button
            onClick={() => onQuickNavigate?.('customize')}
            className="space-y-2 p-4 rounded-lg transition-all hover:bg-white/50 hover:shadow-md cursor-pointer text-center group border border-transparent hover:border-amber-200"
            aria-label="Customize Structure - Navigate to Content Selection"
          >
            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mx-auto transition-transform group-hover:scale-110">
              <svg className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 010 2H6v2a1 1 0 01-2 0V5zM20 5a1 1 0 00-1-1h-4a1 1 0 100 2h2v2a1 1 0 102 0V5zM4 19a1 1 0 001 1h4a1 1 0 100-2H6v-2a1 1 0 10-2 0v3zM20 19a1 1 0 01-1 1h-4a1 1 0 110-2h2v-2a1 1 0 112 0v3z" />
              </svg>
            </div>
            <h3 className="text-slate-700">Customize Structure</h3>
            <p className="text-slate-500 text-sm">
              Drag, reorder, and select sections
            </p>
            <p className="text-xs text-amber-600 opacity-0 group-hover:opacity-100 transition-opacity">
              → Go to Content Selection
            </p>
          </button>
          <button
            onClick={() => onQuickNavigate?.('export')}
            className="space-y-2 p-4 rounded-lg transition-all hover:bg-white/50 hover:shadow-md cursor-pointer text-center group border border-transparent hover:border-green-200"
            aria-label="Export Instantly - Preview Demo Presentation"
          >
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto transition-transform group-hover:scale-110">
              <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
              </svg>
            </div>
            <h3 className="text-slate-700">Export Instantly</h3>
            <p className="text-slate-500 text-sm">
              Download as PowerPoint or PDF
            </p>
            <p className="text-xs text-green-600 opacity-0 group-hover:opacity-100 transition-opacity">
              → Preview with Demo
            </p>
          </button>
          </div>
        </div>

        {/* Process Flow */}
        <div className="max-w-2xl mx-auto mt-16 pt-12 border-t border-slate-200">
          <p className="text-center text-sm text-slate-500 mb-6">How It Works</p>
          <div className="flex items-center justify-center gap-3 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600">1</span>
              </div>
              <span className="text-slate-600">Search Topic</span>
            </div>
            <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                <span className="text-amber-600">2</span>
              </div>
              <span className="text-slate-600">Customize Sections</span>
            </div>
            <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600">3</span>
              </div>
              <span className="text-slate-600">Choose Template</span>
            </div>
            <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600">4</span>
              </div>
              <span className="text-slate-600">Export</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
