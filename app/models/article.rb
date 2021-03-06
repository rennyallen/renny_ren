class Article < ApplicationRecord
  include FilterExtends
  include Redis::Objects

  acts_as_taggable
  has_many :comments, as: :owner, dependent: :destroy
  # validates :title, presence: true
  # validates :content, presence: true, length: { minimum: 5 }
  # has_many :tags, dependent: :destroy
  has_one :timeline_item, as: :owner, dependent: :destroy

  after_create :create_timeline_item

  counter :view_times, default: 0

  def self.year_month
    Time.now.strftime('%Y-%m')
  end

  def self.find_article_by_tag(tag)
    where('tag like ?', '%' + tag.tag_name + '%')
  end

  def create_timeline_item
    create_timeline_item!(
      title: title,
      content: content[0..100]
    )
  end
end
