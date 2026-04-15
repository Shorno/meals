import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { User, Mail, Calendar, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

export default async function ProfilePage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/sign-in");
  }

  const { user } = session;

  // Format the date if it exists
  const joinedDate = user.createdAt
    ? new Date(user.createdAt).toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      })
    : "Unknown";

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">My Profile</h1>
        
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Cover Photo / Header area */}
          <div className="h-32 bg-gradient-to-r from-pink-400 to-pink-300"></div>
          
          <div className="px-8 pb-8">
            {/* Avatar Row */}
            <div className="flex justify-between items-end -mt-12 mb-6">
              <div className="h-24 w-24 rounded-full border-4 border-white bg-pink-100 flex items-center justify-center text-pink-500 text-3xl font-bold shadow-md">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <Button variant="outline" className="text-gray-600 rounded-full h-9 px-4 font-medium">
                <Settings className="w-4 h-4 mr-2" />
                Edit Profile
              </Button>
            </div>

            {/* User Info details */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
              <div className="flex items-center gap-4 mt-3 text-gray-600">
                <div className="flex items-center gap-1.5 text-sm">
                  <Mail className="w-4 h-4 text-gray-400" />
                  {user.email}
                </div>
                <div className="flex items-center gap-1.5 text-sm">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  Joined {joinedDate}
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-gray-100 pt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <div className="text-sm text-gray-500 mb-1">Status</div>
                  <div className="font-medium text-gray-900 flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    Active
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <div className="text-sm text-gray-500 mb-1">Email Verification</div>
                  <div className="font-medium text-gray-900">
                    {user.emailVerified ? (
                      <span className="text-green-600">Verified</span>
                    ) : (
                      <span className="text-orange-500">Unverified</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
