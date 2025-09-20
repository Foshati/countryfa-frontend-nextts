
import CountrySelect from "@/components/CountrySelect"

export default function page() {
  return (
    <div className="flex items-center justify-center min-h-screen p-8">
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-bold mb-6">Select Country</h1>
        <CountrySelect />
      </div>
    </div>
  )
}
