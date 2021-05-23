from django.contrib import admin
from Backend.models import MembershipCategory, Member, MembershipType, \
    Publication, Titles, BoardMember, Testimonial, Committee, \
    Secretariat, CommitteeMembership, PartnerCategory, Partner, Conference,Project,Scholarship,Calls,Documents,Subscription,Newsletter,ContactUs

# Register your models here.
admin.site.register(MembershipCategory)
admin.site.register(MembershipType)
admin.site.register(Member)
admin.site.register(Publication)
admin.site.register(Titles)
admin.site.register(BoardMember)
admin.site.register(Testimonial)
admin.site.register(Committee)
admin.site.register(Secretariat)
admin.site.register(CommitteeMembership)
admin.site.register(PartnerCategory)
admin.site.register(Conference)
admin.site.register(Project)
admin.site.register(Scholarship)
admin.site.register(Calls)
admin.site.register(Partner)
admin.site.register(Documents)
admin.site.register(Subscription)
admin.site.register(Newsletter)
admin.site.register(ContactUs)

