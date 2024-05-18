import React from 'react'

export default function HorizontalRule({
  title
}: Readonly<{
  title: string;
}>) {
  return (
    <div className="flex py-5 items-center mx-5">
      <div className="flex-grow border-t border-gray-400"></div>
      <span className="flex-shrink mx-4 text-gray-400">{title}</span>
      <div className="flex-grow border-t border-gray-400"></div>
    </div>
  )
}
