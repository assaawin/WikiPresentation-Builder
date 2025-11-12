import { Check, X } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "motion/react";

export interface Template {
  id: string;
  name: string;
  description: string;
  primaryColor: string;
  secondaryColor: string;
  fontStyle: "modern" | "classic" | "minimal" | "colorful";
}

interface TemplateSelectionModalProps {
  open: boolean;
  selectedTemplateId: string;
  onSelectTemplate: (templateId: string) => void;
  onContinue: () => void;
  onBack: () => void;
  onOpenChange?: (open: boolean) => void;
}

const templates: Template[] = [
  {
    id: "modern-lecture",
    name: "Modern Lecture",
    description:
      "Clean and contemporary design with bold headers",
    primaryColor: "#2563eb",
    secondaryColor: "#1e40af",
    fontStyle: "modern",
  },
  {
    id: "classic-blackboard",
    name: "Classic Blackboard",
    description: "Traditional academic style with serif fonts",
    primaryColor: "#1f2937",
    secondaryColor: "#374151",
    fontStyle: "classic",
  },
  {
    id: "colorful-classroom",
    name: "Colorful Classroom",
    description: "Vibrant and engaging with bright accents",
    primaryColor: "#f59e0b",
    secondaryColor: "#d97706",
    fontStyle: "colorful",
  },
  {
    id: "minimal-thesis",
    name: "Minimal Thesis",
    description: "Elegant and distraction-free presentation",
    primaryColor: "#64748b",
    secondaryColor: "#475569",
    fontStyle: "minimal",
  },
  {
    id: "scientific-journal",
    name: "Scientific Journal",
    description: "Professional research-oriented layout",
    primaryColor: "#0891b2",
    secondaryColor: "#0e7490",
    fontStyle: "modern",
  },
];

interface TemplateCardProps {
  template: Template;
  selected: boolean;
  onSelect: () => void;
  index: number;
}

function TemplateCard({
  template,
  selected,
  onSelect,
  index,
}: TemplateCardProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      onClick={onSelect}
      className={`group relative text-left w-full rounded-lg overflow-hidden transition-all ${
        selected
          ? "ring-2 ring-blue-600 ring-offset-2 shadow-xl"
          : "ring-1 ring-slate-200 hover:ring-blue-300 hover:shadow-lg"
      }`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Preview Slides */}
      <div className="space-y-2 p-4 bg-slate-50">
        {/* Title Slide Preview */}
        <motion.div
          className="h-24 rounded border border-slate-200 flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: template.primaryColor }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <div className="text-white text-center space-y-1.5">
            <div className="h-3 w-32 bg-white/90 rounded mx-auto"></div>
            <div className="h-2 w-20 bg-white/70 rounded mx-auto"></div>
          </div>
        </motion.div>

        {/* Content Slide Preview */}
        <motion.div
          className="h-24 rounded border border-slate-200 bg-white p-3 space-y-2"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <div
            className="h-2 w-24 rounded"
            style={{ backgroundColor: template.primaryColor }}
          ></div>
          <div className="space-y-1.5">
            <div className="h-1.5 w-full bg-slate-200 rounded"></div>
            <div className="h-1.5 w-full bg-slate-200 rounded"></div>
            <div className="h-1.5 w-3/4 bg-slate-200 rounded"></div>
          </div>
        </motion.div>

        {/* Image Slide Preview */}
        <motion.div
          className="h-24 rounded border border-slate-200 bg-white flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <div className="w-16 h-12 bg-slate-200 rounded"></div>
        </motion.div>
      </div>

      {/* Template Info */}
      <div className="p-4 bg-white border-t border-slate-200">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <h4 className="text-slate-900 truncate">
              {template.name}
            </h4>
            <p className="text-slate-600 text-sm mt-1 line-clamp-2">
              {template.description}
            </p>
          </div>
          <AnimatePresence mode="wait">
            {selected ? (
              <motion.div
                key="selected"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="ml-2 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0"
              >
                <Check className="h-4 w-4 text-white" />
              </motion.div>
            ) : (
              <motion.div
                key="unselected"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="ml-2 w-6 h-6 border-2 border-slate-300 rounded-full flex items-center justify-center flex-shrink-0"
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.button>
  );
}

export function TemplateSelectionModal({
  open,
  selectedTemplateId,
  onSelectTemplate,
  onContinue,
  onBack,
  onOpenChange,
}: TemplateSelectionModalProps) {
  const handleClose = () => {
    onOpenChange?.(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/50 z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="p-6 pb-4 border-b border-slate-200 relative">
                <button
                  onClick={handleClose}
                  className="absolute right-4 top-4 p-2 rounded-lg hover:bg-slate-100 transition-colors opacity-70 hover:opacity-100"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </button>
                <h2 className="text-xl text-slate-900 pr-8">
                  Choose Your Presentation Template
                </h2>
                <p className="text-sm text-slate-600 mt-2">
                  Click on a template card to select it. Each
                  template has been designed for different
                  teaching contexts.
                </p>
              </div>

              {/* Template Grid */}
              <div className="flex-1 overflow-y-auto p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {templates.map((template, index) => (
                    <TemplateCard
                      key={template.id}
                      template={template}
                      selected={
                        selectedTemplateId === template.id
                      }
                      onSelect={() =>
                        onSelectTemplate(template.id)
                      }
                      index={index}
                    />
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-slate-200 p-4 bg-slate-50 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 min-w-0">
                  <Button
                    variant="outline"
                    onClick={onBack}
                    className="shrink-0"
                  >
                    Back to Content Selection
                  </Button>
                  {selectedTemplateId && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-sm text-slate-600 truncate"
                    >
                      Selected:{" "}
                      <span className="font-medium text-slate-900">
                        {
                          templates.find(
                            (t) => t.id === selectedTemplateId,
                          )?.name
                        }
                      </span>
                    </motion.span>
                  )}
                </div>
                <Button
                  onClick={onContinue}
                  className="bg-blue-600 hover:bg-blue-700 shrink-0"
                  disabled={!selectedTemplateId}
                >
                  Continue to Editor
                </Button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}