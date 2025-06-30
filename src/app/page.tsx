import React from 'react'
import { Button } from '@/components/ui/button'
import { House } from 'lucide-react'
export default function page() {
  return (
    <div className="space-y-4">
      {/* Primary Button */}
      <Button className='w-[300px]'>Submit</Button>
      <Button disabled>Disabled</Button>

      {/* Secondary Button */}
      <Button variant="secondary">resend</Button>

 {/* Icon Button */}
      <Button>
  <div className="flex items-center gap-x-2">
    <House size={16} />
    <span>Proceed to Dashboard</span>
  </div>
</Button>


      {/* Error Button */}
      <Button variant="error">Delete</Button>

      {/* Ghost Button */}
      <Button variant="ghost">Ghost Action</Button>
    
      {/* Small Button */}
      <Button size="sm">Small Button</Button>

      {/* Icon Button */}
      <Button size="icon">🔔</Button>
    </div>
  )
}


