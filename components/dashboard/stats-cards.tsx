"use client";

import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { type UserStats } from "@/lib/types";

interface StatsCardsProps {
  promise: Promise<UserStats>;
}

export function StatsCards({ promise }: StatsCardsProps) {
  const { toast } = useToast();

  useEffect(() => {
    promise.catch((error) => {
      toast({
        title: "Error loading stats",
        description: error.message,
        variant: "destructive",
      });
    });
  }, [promise, toast]);

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <div className="p-6">
          <h3 className="text-sm font-medium text-muted-foreground">
            Total Bookings
          </h3>
          <div className="mt-2 text-2xl font-bold">{promise.total_bookings}</div>
          <p className="text-xs text-muted-foreground">
            {promise.bookings_change}% from last month
          </p>
        </div>
      </Card>
      <Card>
        <div className="p-6">
          <h3 className="text-sm font-medium text-muted-foreground">
            Total Spent
          </h3>
          <div className="mt-2 text-2xl font-bold">
            {formatCurrency(promise.total_spent)}
          </div>
          <p className="text-xs text-muted-foreground">
            {promise.spent_change}% from last month
          </p>
        </div>
      </Card>
      <Card>
        <div className="p-6">
          <h3 className="text-sm font-medium text-muted-foreground">
            Average Rating
          </h3>
          <div className="mt-2 text-2xl font-bold">
            {promise.average_rating.toFixed(1)} ⭐️
          </div>
          <p className="text-xs text-muted-foreground">
            From {promise.total_reviews} reviews
          </p>
        </div>
      </Card>
      <Card>
        <div className="p-6">
          <h3 className="text-sm font-medium text-muted-foreground">
            Next Booking
          </h3>
          <div className="mt-2 text-2xl font-bold">
            {promise.next_booking ? (
              new Date(promise.next_booking).toLocaleDateString()
            ) : (
              "No upcoming bookings"
            )}
          </div>
          <p className="text-xs text-muted-foreground">
            {promise.next_booking ? "Scheduled" : "Book now"}
          </p>
        </div>
      </Card>
    </div>
  );
}