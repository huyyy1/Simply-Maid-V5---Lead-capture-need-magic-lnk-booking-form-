"use client";

import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatDate, formatCurrency } from "@/lib/utils";
import { type BookingWithDetails } from "@/lib/types";
import { useToast } from "@/hooks/use-toast";

interface BookingDetailsProps {
  promise: Promise<BookingWithDetails>;
}

export function BookingDetails({ promise }: BookingDetailsProps) {
  const { toast } = useToast();

  useEffect(() => {
    promise.catch((error) => {
      toast({
        title: "Error loading booking details",
        description: error.message,
        variant: "destructive",
      });
    });
  }, [promise, toast]);

  return (
    <div className="grid gap-6">
      <Card className="p-6">
        <div className="grid gap-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Booking Details</h3>
            <Badge>{promise.status}</Badge>
          </div>
          <div className="grid gap-2">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Service</span>
              <span className="font-medium">{promise.service.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Location</span>
              <span className="font-medium">{promise.location.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Date</span>
              <span className="font-medium">{formatDate(promise.scheduled_date)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Total</span>
              <span className="font-medium">{formatCurrency(promise.total_price)}</span>
            </div>
          </div>
        </div>
      </Card>

      {promise.cleaner && (
        <Card className="p-6">
          <div className="grid gap-4">
            <h3 className="text-lg font-semibold">Cleaner Details</h3>
            <div className="grid gap-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Name</span>
                <span className="font-medium">{promise.cleaner.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Rating</span>
                <span className="font-medium">{promise.cleaner.rating} ⭐️</span>
              </div>
            </div>
          </div>
        </Card>
      )}

      {promise.notes && (
        <Card className="p-6">
          <div className="grid gap-4">
            <h3 className="text-lg font-semibold">Additional Notes</h3>
            <p className="text-muted-foreground">{promise.notes}</p>
          </div>
        </Card>
      )}
    </div>
  );
}