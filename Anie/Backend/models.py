from django.db import models

# Create your models here.
from django.db import models


class Titles(models.Model):
    TitleName = models.CharField(max_length=20)

    class Meta:
        verbose_name_plural = "Titles"

    def __str__(self):
        return self.TitleName


class MembershipCategory(models.Model):
    Category = models.CharField(max_length=20)

    class Meta:
        verbose_name_plural = "Membership Categories"

    def __str__(self):
        return self.Category


class MembershipType(models.Model):
    Type = models.CharField(max_length=20)

    class Meta:
        verbose_name_plural = "Membership Types"

    def __str__(self):
        return self.Type


class Member(models.Model):
    MemberID = models.AutoField(primary_key=True)
    FirstName = models.CharField(max_length=50)
    LastName = models.CharField(max_length=50)
    OtherNames = models.CharField(max_length=50, blank=True, null=True)
    Designation = models.CharField(max_length=255)
    Affiliation = models.CharField(max_length=255)
    Membership = models.ForeignKey(MembershipType, on_delete=models.CASCADE)
    PaymentStatus = models.BooleanField(default=False)
    BioData = models.TextField()
    Category = models.ForeignKey(MembershipCategory, on_delete=models.CASCADE)

    def __str__(self):
        return self.LastName + " " + self.FirstName


class Publication(models.Model):
    Image = models.ImageField()
    Name = models.CharField(max_length=50)
    Description = models.TextField()
    Slug = models.SlugField()
    DatePublished = models.DateTimeField(auto_now_add=True)
    Authors = models.CharField(max_length=655)

    def __str__(self):
        return self.Name


class BoardMember(models.Model):
    Title = models.ForeignKey(Titles, on_delete=models.CASCADE)
    FirstName = models.CharField(max_length=50)
    LastName = models.CharField(max_length=50)
    OtherNames = models.CharField(max_length=50)
    Designation = models.CharField(max_length=255)
    Affiliation = models.CharField(max_length=255)
    BioData = models.TextField()

    class Meta:
        verbose_name_plural = "Board Members"

    def __str__(self):
        return self.Title + " " + self.FirstName + " " + self.LastName


class Testimonial(models.Model):
    Title = models.ForeignKey(Titles, on_delete=models.CASCADE)
    FullName = models.CharField(max_length=255)
    Testimony = models.TextField()

    class Meta:
        verbose_name_plural = "Testimonials"

    def __str__(self):
        return self.FullName


class Committee(models.Model):
    CommitteeName = models.CharField(max_length=255)

    def __str__(self):
        return self.CommitteeName


class CommitteeMembership(models.Model):
    Title = models.ForeignKey(Titles, on_delete=models.CASCADE)
    FirstName = models.CharField(max_length=50)
    LastName = models.CharField(max_length=50)
    OtherNames = models.CharField(max_length=50)
    Designation = models.CharField(max_length=255)
    Affiliation = models.CharField(max_length=255)
    BioData = models.TextField()

    class Meta:
        verbose_name_plural = "Committee Members"

    def __str__(self):
        return self.Title + " " + self.FirstName + " " + self.LastName


class Secretariat(models.Model):
    Title = models.ForeignKey(Titles, on_delete=models.CASCADE)
    FirstName = models.CharField(max_length=50)
    LastName = models.CharField(max_length=50)
    OtherNames = models.CharField(max_length=50)
    Designation = models.CharField(max_length=255)
    BioData = models.TextField()

    def __str__(self):
        return self.Title + " " + self.FirstName + " " + self.LastName


class PartnerCategory(models.Model):
    Name = models.CharField(max_length=50)

    class Meta:
        verbose_name_plural = "Partner Categories"

    def __str__(self):
        return self.Name


class Partner(models.Model):
    Logo = models.ImageField()
    Name = models.CharField(max_length=255)
    Profile = models.TextField()
    CategoryName = models.ForeignKey(PartnerCategory, on_delete=models.CASCADE)

    def __str__(self):
        return self.Name


class Conference(models.Model):
    Image = models.ImageField()
    Name = models.CharField(max_length=255)
    Location = models.CharField(max_length=255)
    Description = models.TextField()
    Date = models.CharField(max_length=35)
    Slug = models.SlugField()

    def __str__(self):
        return self.Name + " " + self.Location + "" + self.Date


class Project(models.Model):
    ProjectName = models.CharField(max_length=255)
    Description = models.TextField()
    Slug = models.SlugField()
    Status = models.BooleanField(default=False)
    Implementers = models.TextField()

    def __str__(self):
        return self.ProjectName + " " + self.Status


class Scholarship(models.Model):
    Name = models.CharField(max_length=255)
    Provider = models.CharField(max_length=255)
    Description = models.TextField()
    Link = models.CharField(max_length=255)
    slug = models.SlugField()

    def __str__(self):
        return self.Name


class Calls(models.Model):
    Name = models.CharField(max_length=255)
    Source = models.CharField(max_length=255)
    Description = models.TextField()
    Link = models.CharField(max_length=255)
    Slug = models.SlugField()
    Date=models.DateTimeField()

    class Meta:
        verbose_name_plural = "Calls"

    def __str__(self):
        return self.Name


class Documents(models.Model):
    Name = models.CharField(max_length=255)
    Description = models.TextField()
    FileSize = models.CharField(max_length=55)
    FileFormat = models.CharField(max_length=55)
    File = models.FileField()
    Slug = models.SlugField()

    class Meta:
        verbose_name_plural = "Documents"

    def __str__(self):
        return self.Name


class Subscription(models.Model):
    Name = models.CharField(max_length=255)
    Email = models.CharField(max_length=255)

    def __str__(self):
        return self.Name, self.Email


class Newsletter(models.Model):
    picture = models.ImageField()
    Name = models.CharField(max_length=55)
    Description = models.TextField()
    DatePublished = models.DateField()
    Slug = models.SlugField()
    File = models.FileField()

    def __str__(self):
        return self.Name


class ContactUs(models.Model):
    FullName = models.CharField(max_length=255)
    Email = models.EmailField()
    Subject = models.CharField(max_length=255)
    Message = models.TextField()

    class Meta:
        verbose_name_plural = "Contact Us"

    def __str__(self):
        return self.FullName, self.Subject
