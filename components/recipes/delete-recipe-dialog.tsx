"use client";

import { Button } from "@/components/ui/button";

interface DeleteRecipeDialogProps {
  recipeName: string;
  isOpen: boolean;
  isDeleting?: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function DeleteRecipeDialog({
  recipeName,
  isOpen,
  isDeleting = false,
  onConfirm,
  onCancel,
}: DeleteRecipeDialogProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={onCancel}
      />

      {/* Dialog */}
      <div className="relative bg-white rounded-2xl shadow-2xl shadow-black/10 max-w-md w-full mx-4 animate-in zoom-in-95 fade-in duration-200">
        <div className="p-6 text-center space-y-4">
          {/* Warning icon */}
          <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center mx-auto">
            <svg
              className="w-7 h-7 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Delete Recipe
            </h3>
            <p className="text-sm text-gray-500 mt-2 leading-relaxed">
              Are you sure you want to delete{" "}
              <span className="font-semibold text-gray-700">
                &quot;{recipeName}&quot;
              </span>
              ? This action cannot be undone.
            </p>
          </div>

          <div className="flex items-center justify-center gap-3 pt-2">
            <Button
              type="button"
              onClick={onCancel}
              variant="outline"
              className="border-gray-200 text-gray-600 hover:bg-gray-50 rounded-xl px-6 h-10 text-sm font-medium"
            >
              Cancel
            </Button>
            <Button
              type="button"
              onClick={onConfirm}
              disabled={isDeleting}
              className="bg-red-500 hover:bg-red-600 text-white rounded-xl px-6 h-10 text-sm font-semibold border-none disabled:opacity-50"
            >
              {isDeleting ? (
                <span className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Deleting...
                </span>
              ) : (
                "Delete Recipe"
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
