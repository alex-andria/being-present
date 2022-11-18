class JournalsController < ApplicationController

    def index
        render json: Journal.all
    end

    def show
        journal = Journal.find_by[:journal_id]
    end

    def create
        journal = Journal.create!(journal_params)
        render json: journal, status: :created
    end
    
    def update
        journal = Journal.find_by[:journal_id]
        journal.update!(journal_params)
        render json: journal, status: :accepted
    end

    def destroy
        journal = Journal.find_by(id: params[:id])
        journal.destroy!
        head :no_content
    end

    private 

    def journal_params
        params.permit(:journal_image, :journal_entry, :mind, :body, :journal_date)
    end

    # def update_params
    #     params.permit(:first_name, :last_name, :profile_image, :email, :bio, :password, :password_confirmation)
    # end


end
