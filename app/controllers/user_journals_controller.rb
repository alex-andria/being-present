class UserJournalsController < ApplicationController

    def index 
        render json: UserJournal.all
    end

end
