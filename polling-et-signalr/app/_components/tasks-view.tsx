
export default function TaskView() {
  return (
    <div className="bg-white text-slate-900 border border-slate-200 rounded-xl shadow-md overflow-hidden max-w-sm">
        <div className="p-6 pb-0 flex flex-col space-y-1.5">
            <h3 className="text-xl font-semibold leading-none tracking-tight">Card Title</h3>
            <p className="text-sm text-slate-500">Card Subtitle</p>
        </div>

        <div className="p-6 text-sm text-slate-600 leading-relaxed">
            This is the card content area, mirroring the layout structure of mat-card-content.
        </div>

        <div className="p-6 pt-0 flex items-center justify-end space-x-2">
            <button className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-md transition">Cancel</button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-sm transition">Action</button>
        </div>
    </div>
  );
}
