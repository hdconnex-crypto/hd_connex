
'use client';

import { useState } from 'react';
import { contractorProfiles, reviewsData } from '../lib/data';
import StarRating from './star-rating';
import { Card } from './ui/button';

interface ContractorDashboardProps {
  isAdminView: boolean;
  onNavigate: (view: 'home' | 'contractor-signup' | 'contractor-dashboard') => void;
}

export default function ContractorDashboard({ isAdminView, onNavigate }: ContractorDashboardProps) {
  const [activeTab, setActiveTab] = useState(isAdminView ? 'analytics' : 'profile');
  const [selectedContractor, setSelectedContractor] = useState(1);

  const contractor = contractorProfiles[selectedContractor as keyof typeof contractorProfiles];
  const reviews = reviewsData[selectedContractor as keyof typeof reviewsData] || [];

  // Mock analytics data
  const analyticsData = {
    totalLeads: 47,
    convertedLeads: 23,
    conversionRate: 49,
    avgProjectValue: 8500,
    monthlyRevenue: 195500,
    customerSatisfaction: 4.8,
    responseTime: '2.3 hours',
    profileViews: 1247
  };

  const recentLeads = [
    { id: 1, service: 'Roof Replacement', location: 'Orlando, FL', budget: '$15,000-20,000', date: '2025-08-25', status: 'New' },
    { id: 2, service: 'Pool Installation', location: 'Winter Park, FL', budget: '$40,000-60,000', date: '2025-08-24', status: 'Quoted' },
    { id: 3, service: 'HVAC Repair', location: 'Sanford, FL', budget: '$2,000-5,000', date: '2025-08-23', status: 'Completed' },
    { id: 4, service: 'Kitchen Remodel', location: 'Altamonte Springs, FL', budget: '$25,000-35,000', date: '2025-08-22', status: 'In Progress' },
  ];

  if (!contractor) {
    return <div>Loading...</div>;
  }

  return (
    <section className="py-24 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold gradient-text mb-2">
                {isAdminView ? 'Network Analytics Dashboard' : 'Contractor Dashboard'}
              </h1>
              <p className="text-gray-600">
                {isAdminView ? 'Overview of contractor network performance' : `Welcome back, ${contractor?.companyName}`}
              </p>
            </div>
            
            {isAdminView && (
              <div className="flex items-center space-x-4">
                <label className="text-gray-700 font-medium">View Contractor:</label>
                <select 
                  value={selectedContractor} 
                  onChange={(e) => setSelectedContractor(Number(e.target.value))}
                  className="p-2 border rounded-lg bg-white"
                >
                  {Object.values(contractorProfiles).map(c => (
                    <option key={c.id} value={c.id}>{c.companyName}</option>
                  ))}
                </select>
              </div>
            )}
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow-sm p-1 mb-8 flex">
          {['profile', 'analytics', 'leads', 'reviews'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 px-6 rounded-md font-medium transition-all ${
                activeTab === tab 
                  ? 'bg-blue-500 text-white shadow-md' 
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
              }`}
            >
              <i className={`fas ${
                tab === 'profile' ? 'fa-user' :
                tab === 'analytics' ? 'fa-chart-bar' :
                tab === 'leads' ? 'fa-clipboard-list' : 'fa-star'
              } mr-2`}></i>
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-clipboard-list text-2xl text-white"></i>
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-1">{analyticsData.totalLeads}</h3>
              <p className="text-gray-600 font-medium">Total Leads</p>
              <p className="text-sm text-green-600 mt-1">+12% this month</p>
            </Card>

            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-handshake text-2xl text-white"></i>
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-1">{analyticsData.convertedLeads}</h3>
              <p className="text-gray-600 font-medium">Converted</p>
              <p className="text-sm text-blue-600 mt-1">{analyticsData.conversionRate}% conversion</p>
            </Card>

            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-dollar-sign text-2xl text-white"></i>
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-1">${analyticsData.monthlyRevenue.toLocaleString()}</h3>
              <p className="text-gray-600 font-medium">Monthly Revenue</p>
              <p className="text-sm text-green-600 mt-1">Avg: ${analyticsData.avgProjectValue.toLocaleString()}/project</p>
            </Card>

            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-star text-2xl text-white"></i>
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-1">{analyticsData.customerSatisfaction}</h3>
              <p className="text-gray-600 font-medium">Satisfaction</p>
              <p className="text-sm text-blue-600 mt-1">{analyticsData.responseTime} avg response</p>
            </Card>
          </div>
        )}

        {/* Profile Tab */}
        {activeTab === 'profile' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <div className="flex items-center mb-6">
                  <img 
                    src={contractor.logo} 
                    alt={contractor.companyName} 
                    className="w-20 h-20 rounded-lg mr-6"
                  />
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800">{contractor.companyName}</h2>
                    <div className="flex items-center mt-2">
                      <StarRating rating={contractor.rating} size="text-lg" />
                      <span className="ml-3 text-gray-600">({contractor.totalReviews} reviews)</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="font-bold text-gray-700 mb-3">Company Details</h3>
                    <div className="space-y-2 text-sm">
                      <p><span className="font-medium">License:</span> {contractor.licenseNumber}</p>
                      <p><span className="font-medium">Years in Business:</span> {contractor.yearsInBusiness}</p>
                      <p><span className="font-medium">Insurance:</span> {contractor.isInsured ? `Yes (${contractor.insuranceAmount})` : 'No'}</p>
                      <p><span className="font-medium">Phone:</span> {contractor.phone}</p>
                      <p><span className="font-medium">Email:</span> {contractor.email}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-gray-700 mb-3">Service Areas</h3>
                    <div className="flex flex-wrap gap-2">
                      {contractor.serviceAreas.map(area => (
                        <span key={area} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                          {area} County
                        </span>
                      ))}
                    </div>
                    
                    <h3 className="font-bold text-gray-700 mb-3 mt-4">Specialties</h3>
                    <div className="flex flex-wrap gap-2">
                      {contractor.specialties.map(specialty => (
                        <span key={specialty} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-gray-700 mb-3">About</h3>
                  <p className="text-gray-600 leading-relaxed">{contractor.aboutUs}</p>
                </div>

                {contractor.certifications.length > 0 && (
                  <div className="mt-6">
                    <h3 className="font-bold text-gray-700 mb-3">Certifications</h3>
                    <div className="flex flex-wrap gap-2">
                      {contractor.certifications.map(cert => (
                        <span key={cert} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                          <i className="fas fa-certificate mr-1"></i>{cert}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </Card>
            </div>

            <div>
              <Card>
                <h3 className="text-xl font-bold gradient-text mb-4">Profile Statistics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Profile Views</span>
                    <span className="font-bold text-2xl text-blue-600">{analyticsData.profileViews}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Lead Conversion</span>
                    <span className="font-bold text-2xl text-green-600">{analyticsData.conversionRate}%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Avg Response</span>
                    <span className="font-bold text-lg text-orange-600">{analyticsData.responseTime}</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )}

        {/* Leads Tab */}
        {activeTab === 'leads' && (
          <Card>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold gradient-text">Recent Leads</h3>
              <div className="flex space-x-2">
                <button className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg font-medium">
                  <i className="fas fa-filter mr-2"></i>Filter
                </button>
                <button className="bg-green-100 text-green-800 px-4 py-2 rounded-lg font-medium">
                  <i className="fas fa-download mr-2"></i>Export
                </button>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b bg-gray-50">
                    <th className="text-left p-4 font-semibold">Service</th>
                    <th className="text-left p-4 font-semibold">Location</th>
                    <th className="text-left p-4 font-semibold">Budget</th>
                    <th className="text-left p-4 font-semibold">Date</th>
                    <th className="text-left p-4 font-semibold">Status</th>
                    <th className="text-left p-4 font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {recentLeads.map(lead => (
                    <tr key={lead.id} className="border-b hover:bg-gray-50">
                      <td className="p-4 font-medium">{lead.service}</td>
                      <td className="p-4 text-gray-600">{lead.location}</td>
                      <td className="p-4 text-green-600 font-medium">{lead.budget}</td>
                      <td className="p-4 text-gray-600">{lead.date}</td>
                      <td className="p-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          lead.status === 'New' ? 'bg-blue-100 text-blue-800' :
                          lead.status === 'Quoted' ? 'bg-orange-100 text-orange-800' :
                          lead.status === 'In Progress' ? 'bg-purple-100 text-purple-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {lead.status}
                        </span>
                      </td>
                      <td className="p-4">
                        <button className="text-blue-600 hover:text-blue-800 font-medium">
                          <i className="fas fa-eye mr-1"></i>View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        )}

        {/* Reviews Tab */}
        {activeTab === 'reviews' && (
          <div className="space-y-6">
            <Card>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold gradient-text">Customer Reviews</h3>
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-800">{contractor.rating}</div>
                    <StarRating rating={contractor.rating} size="text-base" />
                    <div className="text-sm text-gray-600">{contractor.totalReviews} reviews</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {reviews.map(review => (
                  <div key={review.id} className="border rounded-lg p-6 bg-gray-50">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                          {review.customerName.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <h4 className="font-semibold">{review.customerName}</h4>
                          <p className="text-sm text-gray-600">{review.projectType}</p>
                        </div>
                      </div>
                      {review.verified && (
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold">
                          <i className="fas fa-check-circle mr-1"></i>Verified
                        </span>
                      )}
                    </div>
                    
                    <StarRating rating={review.rating} size="text-sm" />
                    
                    <p className="text-gray-700 mt-3 leading-relaxed">
                      &ldquo;{review.review}&rdquo;
                    </p>
                    
                    <div className="mt-4 text-xs text-gray-500">
                      <i className="fas fa-calendar-alt mr-1"></i>
                      {new Date(review.date).toLocaleDateString()}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
}
