import React from 'react'
import A from '@comp/a'
import commaNumber from 'comma-number'

function MetricCard({ children, href, data }) {
  return (
    <div className="border border-gray-200 rounded-xl p-4">
      <A href={href} blank className="no-underline">
        <div>{children}</div>
      </A>
      <p className="mt-1 text-3xl font-bold spacing-sm text-black">
        {commaNumber(data)}
      </p>
    </div>
  )
}

export default MetricCard
