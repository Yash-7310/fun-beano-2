'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '../../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { CheckCircle } from 'lucide-react';

export default function BookingConfirmationPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="text-center">
          <CardHeader>
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <CardTitle className="text-2xl mt-4 quicksand-bold">Booking Confirmed!</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-6 quicksand-regular">
              Thank you for your booking. You will receive an email confirmation shortly.
            </p>
            <Button onClick={() => router.push('/')} className="w-full bg-orange-500 hover:bg-orange-600 text-white quicksand-semibold">
              Back to Home
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
