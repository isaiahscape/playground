import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content, className = '' }) => {
  return (
    <div className={`markdown-body ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 mt-6 mb-3 pb-2 border-b border-zinc-200 dark:border-zinc-800">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mt-5 mb-2 pb-1.5 border-b border-zinc-100 dark:border-zinc-800/80">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mt-4 mb-2">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-base font-bold text-zinc-800 dark:text-zinc-200 mt-3 mb-1.5">
              {children}
            </h4>
          ),
          h5: ({ children }) => (
            <h5 className="text-sm font-bold text-zinc-700 dark:text-zinc-300 mt-3 mb-1">
              {children}
            </h5>
          ),
          h6: ({ children }) => (
            <h6 className="text-xs font-bold text-zinc-600 dark:text-zinc-400 mt-2 mb-1 uppercase tracking-wide">
              {children}
            </h6>
          ),
          p: ({ children }) => (
            <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed my-3">
              {children}
            </p>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 dark:text-purple-400 hover:text-purple-500 dark:hover:text-purple-300 underline underline-offset-2 font-medium"
            >
              {children}
            </a>
          ),
          ul: ({ children }) => (
            <ul className="space-y-1.5 my-3 pl-5 list-disc marker:text-purple-500">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="space-y-1.5 my-3 pl-5 list-decimal marker:text-purple-500 marker:font-bold">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed pl-1">
              {children}
            </li>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-purple-500/40 dark:border-purple-500/30 bg-purple-500/5 dark:bg-purple-500/10 pl-4 pr-3 py-2 my-4 rounded-r-lg">
              {children}
            </blockquote>
          ),
          code: ({ className: codeClass, children, ...props }) => {
            const isInline = !codeClass;
            if (isInline) {
              return (
                <code
                  className="bg-zinc-100 dark:bg-zinc-800 text-purple-600 dark:text-purple-400 px-1.5 py-0.5 rounded-md text-xs border border-zinc-200 dark:border-zinc-700/60"
                  {...props}
                >
                  {children}
                </code>
              );
            }
            return (
              <code className={codeClass} {...props}>
                {children}
              </code>
            );
          },
          pre: ({ children }) => (
            <pre className="bg-zinc-950 text-zinc-200 p-4 rounded-xl text-xs overflow-x-auto my-4 border border-zinc-800 leading-relaxed">
              {children}
            </pre>
          ),
          table: ({ children }) => (
            <div className="overflow-x-auto my-4">
              <table className="w-full text-xs border-collapse border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-zinc-100 dark:bg-zinc-800/80">
              {children}
            </thead>
          ),
          th: ({ children }) => (
            <th className="border border-zinc-200 dark:border-zinc-700 px-3 py-2 text-left font-bold text-zinc-900 dark:text-zinc-100">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="border border-zinc-200 dark:border-zinc-700 px-3 py-2 text-zinc-700 dark:text-zinc-300">
              {children}
            </td>
          ),
          hr: () => (
            <hr className="border-zinc-200 dark:border-zinc-800 my-6" />
          ),
          strong: ({ children }) => (
            <strong className="font-bold text-zinc-900 dark:text-zinc-100">
              {children}
            </strong>
          ),
          em: ({ children }) => (
            <em className="italic text-zinc-700 dark:text-zinc-300">
              {children}
            </em>
          ),
          del: ({ children }) => (
            <del className="line-through text-zinc-500 dark:text-zinc-500">
              {children}
            </del>
          ),
          img: ({ src, alt }) => (
            <img
              src={typeof src === 'string' ? src : undefined}
              alt={alt}
              className="max-w-full rounded-xl my-4 border border-zinc-200 dark:border-zinc-800"
            />
          ),
          input: ({ checked, ...props }) => (
            <input
              type="checkbox"
              checked={checked}
              readOnly
              className="w-3.5 h-3.5 rounded border-zinc-300 dark:border-zinc-600 text-purple-500 mr-2 align-middle"
              {...props}
            />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};