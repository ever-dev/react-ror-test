module Api
  module V1
    class ContactsController < ApplicationController

      # GET /contacts
      # GET /contacts.json
      def index
        render json: [
          {
            :id => '1',
            :name => 'Person 1', 
            :email => 'Person1@someone.com', 
            :tags => ['HOST', 'ADMIN', 'TAG 3'], 
            :phone => "+1 073 2714 007", 
            :ipAddress => '12312319391023091', 
            :country => 'USA', 
            :time => '1hr', 
            :ltv => '$50'
          }, {
            :id => '2',
            :name => 'Person 2', 
            :email => 'Person2@someone.com', 
            :tags => ['HOST', 'ADMIN', 'TAG 3'], 
            :phone => "+1 073 2714 007", 
            :ipAddress => '12312319391023091', 
            :country => 'USA', 
            :time => '1hr', 
            :ltv => '$50'
          }, {
            :id => '3',
            :name => 'Person 3', 
            :email => 'Person3@someone.com', 
            :tags => ['HOST', 'ADMIN', 'TAG 3'], 
            :phone => "+1 073 2714 007", 
            :ipAddress => '12312319391023091', 
            :country => 'USA', 
            :time => '1hr', 
            :ltv => '$50'
          }, {
            :id => '4',
            :name => 'Person 4', 
            :email => 'Person4@someone.com', 
            :tags => ['HOST', 'ADMIN', 'TAG 3'], 
            :phone => "+1 073 2714 007", 
            :ipAddress => '12312319391023091', 
            :country => 'USA', 
            :time => '1hr', 
            :ltv => '$50'
          }, {
            :id => '5',
            :name => 'Person 5', 
            :email => 'Person5@someone.com', 
            :tags => ['HOST', 'ADMIN', 'TAG 3'], 
            :phone => "+1 073 2714 007", 
            :ipAddress => '12312319391023091', 
            :country => 'USA', 
            :time => '1hr', 
            :ltv => '$50'
          },
        ]
      end
    end
  end
end
