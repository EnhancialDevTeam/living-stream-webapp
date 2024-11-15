import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Calendar, 
  Clock, 
  Download, 
  MessageSquare, 
  Bell, 
  Settings, 
  User,
  FileText,
  Users,
  CheckSquare,
  ArrowRight
} from 'lucide-react';

interface Task {
  id: string;
  title: string;
  dueDate: string;
  status: 'pending' | 'in-progress' | 'completed';
  priority: 'high' | 'medium' | 'low';
}

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  type: string;
}

interface Resource {
  id: string;
  title: string;
  type: string;
  size: string;
  lastUpdated: string;
}

const Portal: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const tasks: Task[] = [
    {
      id: '1',
      title: 'Review participant applications',
      dueDate: '2024-03-20',
      status: 'in-progress',
      priority: 'high'
    },
    {
      id: '2',
      title: 'Prepare workshop materials',
      dueDate: '2024-03-22',
      status: 'pending',
      priority: 'medium'
    },
    {
      id: '3',
      title: 'Submit monthly report',
      dueDate: '2024-03-25',
      status: 'completed',
      priority: 'high'
    }
  ];

  const events: Event[] = [
    {
      id: '1',
      title: 'Financial Literacy Workshop',
      date: '2024-03-21',
      time: '10:00 AM - 12:00 PM',
      location: 'Virtual',
      type: 'Workshop'
    },
    {
      id: '2',
      title: 'Team Meeting',
      date: '2024-03-22',
      time: '2:00 PM - 3:00 PM',
      location: 'Conference Room A',
      type: 'Meeting'
    }
  ];

  const resources: Resource[] = [
    {
      id: '1',
      title: 'Volunteer Handbook 2024',
      type: 'PDF',
      size: '2.5 MB',
      lastUpdated: '2024-03-01'
    },
    {
      id: '2',
      title: 'Workshop Facilitation Guide',
      type: 'PDF',
      size: '1.8 MB',
      lastUpdated: '2024-03-15'
    },
    {
      id: '3',
      title: 'Program Materials Template',
      type: 'DOCX',
      size: '500 KB',
      lastUpdated: '2024-03-10'
    }
  ];

  const getStatusColor = (status: Task['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: Task['priority']) => {
    switch (priority) {
      case 'high':
        return 'text-red-600';
      case 'medium':
        return 'text-yellow-600';
      default:
        return 'text-green-600';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Top Bar */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`px-4 py-2 font-medium transition ${
                  activeTab === 'dashboard' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Dashboard
              </button>
              <button
                onClick={() => setActiveTab('tasks')}
                className={`px-4 py-2 font-medium transition ${
                  activeTab === 'tasks' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Tasks
              </button>
              <button
                onClick={() => setActiveTab('resources')}
                className={`px-4 py-2 font-medium transition ${
                  activeTab === 'resources' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Resources
              </button>
              <button
                onClick={() => setActiveTab('profile')}
                className={`px-4 py-2 font-medium transition ${
                  activeTab === 'profile' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Profile
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-blue-600">
                <Bell className="w-6 h-6" />
              </button>
              <button className="text-gray-600 hover:text-blue-600">
                <Settings className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            {/* Welcome Section */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h1 className="text-2xl font-bold mb-2">Welcome back, Sarah!</h1>
              <p className="text-gray-600">
                You have 3 tasks pending and 2 upcoming events this week.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: CheckSquare, label: 'Tasks', value: '5 Active' },
                { icon: Users, label: 'Participants', value: '12 Assigned' },
                { icon: Calendar, label: 'Events', value: '2 This Week' },
                { icon: MessageSquare, label: 'Messages', value: '3 Unread' }
              ].map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600">{stat.label}</p>
                      <p className="text-2xl font-bold">{stat.value}</p>
                    </div>
                    <stat.icon className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
              ))}
            </div>

            {/* Recent Tasks & Events */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Tasks */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold">Recent Tasks</h2>
                  <button className="text-blue-600 hover:text-blue-700 font-medium">View All</button>
                </div>
                <div className="space-y-4">
                  {tasks.slice(0, 3).map((task) => (
                    <div key={task.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full ${getPriorityColor(task.priority)}`} />
                        <span className="font-medium">{task.title}</span>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(task.status)}`}>
                        {task.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Events */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold">Upcoming Events</h2>
                  <button className="text-blue-600 hover:text-blue-700 font-medium">View All</button>
                </div>
                <div className="space-y-4">
                  {events.map((event) => (
                    <div key={event.id} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium">{event.title}</h3>
                        <span className="text-sm text-gray-600">{event.type}</span>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {event.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {event.time}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'tasks' && (
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">All Tasks</h2>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                  New Task
                </button>
              </div>
              <div className="space-y-4">
                {tasks.map((task) => (
                  <div key={task.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full ${getPriorityColor(task.priority)}`} />
                      <div>
                        <h3 className="font-medium">{task.title}</h3>
                        <p className="text-sm text-gray-600">Due: {task.dueDate}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(task.status)}`}>
                        {task.status}
                      </span>
                      <button className="text-gray-600 hover:text-blue-600">
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'resources' && (
          <div className="space-y-8">
            {/* Resources Grid */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-bold mb-6">Training Materials</h2>
              <div className="space-y-4">
                {resources.map((resource) => (
                  <div key={resource.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <FileText className="w-5 h-5 text-blue-600" />
                      <div>
                        <h3 className="font-medium">{resource.title}</h3>
                        <p className="text-sm text-gray-600">
                          {resource.type} • {resource.size} • Updated {resource.lastUpdated}
                        </p>
                      </div>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700">
                      <Download className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Discussion Board */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-bold mb-6">Discussion Board</h2>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-600 mb-4">
                    Share updates, ask questions, or collaborate with team members.
                  </p>
                  <textarea
                    placeholder="Start a discussion..."
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    rows={4}
                  ></textarea>
                  <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'profile' && (
          <div className="space-y-8">
            {/* Profile Information */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-bold mb-6">Profile Settings</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    defaultValue="Sarah Johnson"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    defaultValue="sarah.johnson@example.com"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    defaultValue="+44 20 1234 5678"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Role
                  </label>
                  <input
                    type="text"
                    defaultValue="Volunteer Coordinator"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    disabled
                  />
                </div>
              </div>
            </div>

            {/* Notification Preferences */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-bold mb-6">Notification Settings</h2>
              <div className="space-y-4">
                {[
                  'Email notifications for new tasks',
                  'SMS alerts for urgent updates',
                  'Weekly summary reports',
                  'Event reminders'
                ].map((setting, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <span>{setting}</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked={index < 2} />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Save Changes */}
            <div className="flex justify-end">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold">
                Save Changes
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portal;