import { forwardRef } from 'react'

type RowProps = {
  label: string
} & React.InputHTMLAttributes<HTMLInputElement>

const Row = forwardRef<HTMLInputElement, RowProps>(
  ({ label, ...props }, ref) => (
    <div className="grid grid-cols-2 items-center border-t px-4 py-2">
      <div>{label}</div>
      <div className="text-right">
        <input
          ref={ref}
          type="number"
          min={0}
          className="w-16 rounded border px-2 py-px text-right"
          {...props}
        />
      </div>
    </div>
  )
)

Row.displayName = 'Row'

export default Row