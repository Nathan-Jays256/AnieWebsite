from django.urls import path

from Backend.views import HomeView, PartnershipView, BoardMemberView, CommitteeView, \
    SecretariatView, HistoryView, ConferenceView, ResearchView, CapacityView, AdvocacyView, \
    PoliciesView, ConsultancyView, MembershipView, MembersView, PublicationsView, ScholarshipView, \
    CallsView, DocumentsView, NewsletterView, ContactView, RegistrationView

app_name = 'Anie'
urlpatterns = [
    path('', HomeView.as_view(), name='Home'),
    path('history/', HistoryView.as_view(), name='History'),
    path('boardmembers/', BoardMemberView.as_view(), name='Board'),
    path('committee/', CommitteeView.as_view(), name='Committee'),
    path('secretariat/', SecretariatView.as_view(), name='Secretariat'),
    path('partnerships/', PartnershipView.as_view(), name='Partnership'),
    path('conferences/', ConferenceView.as_view(), name='Conference'),
    path('research/', ResearchView.as_view(), name='Research'),
    path('capacity/', CapacityView.as_view(), name='Capacity'),
    path('advocacy/', AdvocacyView.as_view(), name='Advocacy'),
    path('policies/', PoliciesView.as_view(), name='Policies'),
    path('consultancy/', ConsultancyView.as_view(), name='Consultancy'),
    path('publications/', PublicationsView.as_view(), name='Publication'),
    path('calls/', CallsView.as_view(), name='Calls'),
    path('scholarship/', ScholarshipView.as_view(), name='Scholarship'),
    path('membership/', MembershipView.as_view(), name='Membership'),
    path('members/', MembersView.as_view(), name='Member'),
    path('key-documents/', DocumentsView.as_view(), name='Documents'),
    path('newsletter/', NewsletterView.as_view(), name='Newsletter'),
    path('contact/', ContactView.as_view(), name='Contact'),
    path('registration-form/', RegistrationView.as_view(), name='Register'),

]
