"use client";

import React, { useState, useEffect } from "react";
import FollowerGrid from "@/components/FollowerGrid";
import SortToolbar from "@/components/SortToolbar";
import DateFilter from "@/components/DateFilter";

export default function Home() {
  const [followers, setFollowers] = useState([]);
  const [filteredFollowers, setFilteredFollowers] = useState([]);
  const [sortCriteria, setSortCriteria] = useState("total");
  const [dateRange, setDateRange] = useState({
    startDate: null,
    endDate: null,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchFollowers();
  }, []);

  const fetchFollowers = async () => {
    try {
      const response = await fetch(
        "https://gist.githubusercontent.com/pandemonia/21703a6a303e0487a73b2610c8db41ab/raw/82e3ef99cde5b6e313922a5ccce7f38e17f790ac/twubric.json"
      );
      const data = await response.json();
      setFollowers(data);
      setFilteredFollowers(data);
    } catch (error) {
      console.error("Error fetching followers:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    let sorted = [...filteredFollowers];
    sorted.sort((a, b) => b.twubric[sortCriteria] - a.twubric[sortCriteria]);
    setFilteredFollowers(sorted);
  }, [sortCriteria, followers]);

  useEffect(() => {
    const filtered = followers.filter((follower) => {
      if (!dateRange.startDate || !dateRange.endDate) return true;
      const joinDate = new Date(follower.join_date * 1000);
      return joinDate >= dateRange.startDate && joinDate <= dateRange.endDate;
    });
    setFilteredFollowers(filtered);
  }, [dateRange, followers]);

  const handleSort = (criteria) => {
    setSortCriteria(criteria);
  };

  const handleDateFilter = (startDate, endDate) => {
    setDateRange({ startDate, endDate });
  };

  const handleRemoveFollower = (id) => {
    const updatedFollowers = followers.filter(
      (follower) => follower.uid !== id
    );
    setFollowers(updatedFollowers);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 lg:mb-8 text-center text-gray-800">
          Twubric
        </h1>
        <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 mb-6">
          <h2 className="text-lg sm:text-xl font-semibold mb-4 text-gray-700">
            Filters
          </h2>
          <div className="space-y-4 sm:space-y-3 sm:flex sm:flex-wrap sm:items-center sm:justify-between">
            <div className="w-full sm:w-auto mb-4 sm:mb-0">
              <SortToolbar onSort={handleSort} activeCriteria={sortCriteria} />
            </div>
            <div className="w-full sm:w-auto">
              <DateFilter onFilterChange={handleDateFilter} />
            </div>
          </div>
        </div>
        <FollowerGrid
          followers={filteredFollowers}
          onRemoveFollower={handleRemoveFollower}
        />
      </div>
    </div>
  );
}
