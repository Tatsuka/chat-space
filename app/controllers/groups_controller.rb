class GroupsController < ApplicationController

  def index
  end

  def new
    @groupe = Groupe.new
    @groupe.users << current_user
  end

  def create
    @groupe = Groupe.new(group_params)
    if @group.save
      redirect_to root_path, notice: 'グループを作成しました'
    else
      render :new
    end
  end

  def edit
  end

  def update
  end

  private
  def group_params
    params.require(:group).permit(:name, {:user_ids => []})
  end
end
