export const mockBuses = [
  {
    id: 1,
    busNumber: '#8492',
    route: 'Route 42',
    destination: 'Downtown Express',
    capacity: '60% Full',
    status: 'live',
    startCoordinates: [40.7128, -74.0060],
    upcomingStops: [
      { name: 'Central Station', eta: '10:45 AM', distance: '1.2 miles', timeRemaining: '3 mins' },
      { name: 'Financial District', eta: '10:52 AM', distance: '3.4 miles', timeRemaining: '10 mins' },
      { name: 'South Ferry', eta: '11:05 AM', distance: '6.1 miles', timeRemaining: '23 mins' }
    ]
  },
  {
    id: 2,
    busNumber: '#3310',
    route: 'Route 15',
    destination: 'Uptown Local',
    capacity: '80% Full',
    status: 'live',
    startCoordinates: [40.7580, -73.9855],
    upcomingStops: [
      { name: 'Lincoln Square', eta: '1:15 PM', distance: '0.8 miles', timeRemaining: '5 mins' },
      { name: 'Museum Mile', eta: '1:28 PM', distance: '2.5 miles', timeRemaining: '18 mins' },
      { name: 'Harlem', eta: '1:45 PM', distance: '5.0 miles', timeRemaining: '35 mins' }
    ]
  },
  {
    id: 3,
    busNumber: '#9921',
    route: 'Route 7',
    destination: 'Airport Shuttle',
    capacity: '40% Full',
    status: 'live',
    startCoordinates: [40.6413, -73.7781],
    upcomingStops: [
      { name: 'Terminal 1', eta: '3:30 PM', distance: '4.5 miles', timeRemaining: '12 mins' },
      { name: 'Terminal 4', eta: '3:35 PM', distance: '5.2 miles', timeRemaining: '17 mins' },
      { name: 'Rental Car Hub', eta: '3:45 PM', distance: '8.0 miles', timeRemaining: '27 mins' }
    ]
  },
  {
    id: 4,
    busNumber: '#1045',
    route: 'Route 22',
    destination: 'University Campus',
    capacity: '95% Full',
    status: 'live',
    startCoordinates: [40.7306, -73.9962],
    upcomingStops: [
      { name: 'Science Building', eta: '8:55 AM', distance: '0.2 miles', timeRemaining: '1 min' },
      { name: 'Main Library', eta: '8:58 AM', distance: '0.5 miles', timeRemaining: '4 mins' },
      { name: 'Dormitories', eta: '9:05 AM', distance: '1.1 miles', timeRemaining: '11 mins' }
    ]
  }
];
