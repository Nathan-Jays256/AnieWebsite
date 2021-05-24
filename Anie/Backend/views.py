from django.shortcuts import render

# Create your views here.
from django.views.generic import View, ListView

from Backend.models import Newsletter


class HomeView(View):
    def get(self, *args, **kwargs):
        return render(self.request, "home.html")


class HistoryView(View):
    def get(self, *args, **kwargs):
        return render(self.request, "ourhistory.html")


class BoardMemberView(View):
    def get(self, *args, **kwargs):
        return render(self.request, "boardmembers.html")


class SecretariatView(View):
    def get(self, *args, **kwargs):
        return render(self.request, "secretariat.html")


class CommitteeView(View):
    def get(self, *args, **kwargs):
        return render(self.request, "committee.html")


class PartnershipView(View):
    def get(self, *args, **kwargs):
        return render(self.request, "partnership.html")


class ConferenceView(View):
    def get(self, *args, **kwargs):
        return render(self.request, "conference.html")


class ResearchView(View):
    def get(self, *args, **kwargs):
        return render(self.request, "research.html")


class CapacityView(View):
    def get(self, *args, **kwargs):
        return render(self.request, "capacity.html")


class AdvocacyView(View):
    def get(self, *args, **kwargs):
        return render(self.request, "advocacy.html")


class PoliciesView(View):
    def get(self, *args, **kwargs):
        return render(self.request, "policies.html")


class ConsultancyView(View):
    def get(self, *args, **kwargs):
        return render(self.request, "consultancy.html")


class MembershipView(View):
    def get(self, *args, **kwargs):
        return render(self.request, "membership.html")


class MembersView(View):
    def get(self, *args, **kwargs):
        return render(self.request, "members.html")


class PublicationsView(View):
    def get(self, *args, **kwargs):
        return render(self.request, "publications.html")


class ScholarshipView(View):
    def get(self, *args, **kwargs):
        return render(self.request, "scholarships.html")


class CallsView(View):
    def get(self, *args, **kwargs):
        return render(self.request, "calls.html")


class DocumentsView(View):
    def get(self, *args, **kwargs):
        return render(self.request, "documents.html")


class GoalsView(View):
    def get(self, *args, **kwargs):
        return render(self.request, "goals.html")


class TrainingView(View):
    def get(self, *args, **kwargs):
        return render(self.request, "training.html")


class NewsletterView(ListView):
    model = Newsletter
    paginate_by = 6
    template_name = "newsletter.html"
    context_object_name = 'pages'
    query = ""


class ContactView(View):
    def get(self, *args, **kwargs):
        return render(self.request, "contact.html")


class RegistrationView(View):
    def get(self, *args, **kwargs):
        return render(self.request, "registration.html")
